import practices from './data.json';

export default practices.filter(
  practice => practice.score >= 0 && !!practice.geoJsonFeature,
);
