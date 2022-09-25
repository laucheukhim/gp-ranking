import L from 'leaflet';
import leafletPip from '@mapbox/leaflet-pip';

export async function checkPostcode(postcode) {
  const response = await fetch(
    `https://api.getthedata.com/postcode/${postcode}`,
  );
  return await response.json();
}

export function checkBoundary(geoJsonFeature, latitude, longitude) {
  const layer = L.geoJSON(geoJsonFeature);
  const { OrgLatitude, OrgLongitude } = geoJsonFeature[0].properties;
  const from =
    OrgLatitude && OrgLongitude
      ? L.latLng(OrgLatitude, OrgLongitude)
      : layer.getBounds().getCenter();
  const to = L.latLng(latitude, longitude);
  const results = leafletPip.pointInLayer([longitude, latitude], layer);
  return {
    distance: from.distanceTo(to),
    catchment: !(results === undefined || results.length === 0),
  };
}
