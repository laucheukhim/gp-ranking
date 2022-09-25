import fs from 'fs';
import csv from 'csv-parser';

const practices = await new Promise((resolve, reject) => {
  const rows = [];
  fs.createReadStream(
    decodeURIComponent(
      new URL('../../data/survey/practices.csv', import.meta.url).pathname,
    ),
  )
    .pipe(csv())
    .on('data', data =>
      rows.push({
        practiceCode: data['﻿Practice_Code'],
        practiceName: data['Practice_Name'],
        score: data['Q28_12pct'],
      }),
    )
    .on('end', () => {
      resolve(rows);
    })
    .on('error', reject);
});

for (let i = 0, length = practices.length; i < length; i++) {
  const practice = practices[i];
  try {
    const data = fs.readFileSync(
      decodeURIComponent(
        new URL(
          `../../data/catchment/${practice.practiceCode}.geojson`,
          import.meta.url,
        ).pathname,
      ),
    );
    practice.geoJsonFeature = JSON.parse(data);
  } catch (error) {
    console.warn(`Cannot find geoJSON data for ${practice.practiceCode}`);
  }
}

fs.writeFileSync(
  decodeURIComponent(
    new URL('../../src/modules/practices/data.json', import.meta.url).pathname,
  ),
  JSON.stringify(practices, null, 2),
);
