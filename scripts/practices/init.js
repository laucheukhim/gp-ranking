import fs from 'fs';
import csv from 'csv-parser';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';
import { Parser } from 'acorn';

function getVariableByName(tree, name) {
  const node = tree.body.find(node => {
    const declarations = node.declarations;
    if (declarations) {
      const declaration = declarations[0];
      if (declaration) {
        return declaration.id.name === name;
      }
    }
    return false;
  });
  if (node) {
    return node.declarations[0].init;
  }
  return undefined;
}

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
    practice.geoJsonFeature = JSON.parse(data).features;
  } catch (error) {
    console.warn(
      `${practice.practiceCode}: Finding fallback geoJSON data for ${practice.practiceName}`,
    );
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      const response = await fetch(
        `https://www.primarycare.nhs.uk/publicfn/catchment.aspx?${new URLSearchParams(
          {
            oc: practice.practiceCode,
            h: 400,
            w: 600,
          },
        ).toString()}`,
      );
      const html = await response.text();
      const root = parse(html);
      root.getElementsByTagName('script').forEach(element => {
        const script = element.innerHTML;
        if (script.includes('openstreetmap')) {
          const tree = Parser.parse(script, { ecmaVersion: 2020 });
          const jsonNode = getVariableByName(tree, 'json');
          if (jsonNode) {
            practice.geoJsonFeature = JSON.parse(jsonNode.arguments[0].value);
          }
        }
      });
    } catch (error) {}
  }
  if (!practice.geoJsonFeature) {
    console.warn(
      `${practice.practiceCode}: Cannot find geoJSON data for ${practice.practiceName}`,
    );
  }
}

fs.writeFileSync(
  decodeURIComponent(
    new URL('../../src/modules/practices/data.json', import.meta.url).pathname,
  ),
  JSON.stringify(practices, null, 2),
);
