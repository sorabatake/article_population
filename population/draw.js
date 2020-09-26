function drawGeo(url) {
  $.ajax({
    url: url,
    type: "GET",
    success: function (data) {
      L.geoJSON(data, {
        style: function (feature) {
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

for (var i = 1; i < 47; ++i) {
  drawGeo(
    "https://rawcdn.githack.com/sorabatake/article_population/population/master/" +
      i +
      ".geojson"
  );
}
