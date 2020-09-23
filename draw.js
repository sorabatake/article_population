function drawGeo(url) {
  $.ajax({
    url,
    type: "GET",
    contentType: "application/json",
    success(data) {
      console.log(data);
      L.geoJSON(data, {
        style(feature) {
          return {
            fillColor: getColor(feature.properties.JINKO_LEVEL),
            fillOpacity: 0.2,
            opacity: 0,
          };
        },
      }).addTo(map);
    },
  });
}

function getColor(level) {
  switch (level) {
    case 0:
      return "#ffffcc";

    case 1:
      return "#fed976";

    case 2:
      return "#fd8c3c";

    case 3:
      return "#e2191c";

    case 4:
      return "#800026";

    default:
      return "#ffffcc";
  }
}

for (let i = 1; i < 47; ++i) {
  drawGeo(
    `https://cdn.jsdelivr.net/gh/seito2/japan_population@latest/${i}.geojson`
  );
}
