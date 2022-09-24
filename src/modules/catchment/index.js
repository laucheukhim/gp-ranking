import L from 'leaflet';
import leafletPip from '@mapbox/leaflet-pip';

export async function checkPostcode(postcode) {
  const response = await fetch(
    `https://api.getthedata.com/postcode/${postcode}`,
  );
  return await response.json();
}

export function checkBoundary(boundary, target) {
  const layer = L.geoJSON(boundary.geoJsonFeature);
  const from =
    boundary.latitude && boundary.longitude
      ? L.latLng(boundary.latitude, boundary.longitude)
      : layer.getBounds().getCenter();
  const to = L.latLng(target.latitude, target.longitude);
  const results = leafletPip.pointInLayer(
    [target.longitude, target.latitude],
    layer,
  );
  return {
    distance: from.distanceTo(to),
    catchment: !(results === undefined || results.length === 0),
  };
}
