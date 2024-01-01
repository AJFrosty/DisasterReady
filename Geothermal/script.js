$(document).ready(function() {
  var map = L.map('map').setView([17.087635, -61.772346], 13);

  // Tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; DisasterReady Caribbean'
  }).addTo(map);

  var layers = {
    temperature: L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=f0432aedfec8f9aa7b07f0b4472222de', {
      attribution: '&copy; DisasterReady Caribbean',
      APIkey: 'f0432aedfec8f9aa7b07f0b4472222de'
    }),
    precipitation: L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=f0432aedfec8f9aa7b07f0b4472222de', {
      attribution: '&copy; DisasterReady Caribbean',
      APIkey: 'f0432aedfec8f9aa7b07f0b4472222de'
    }),
    wind: L.tileLayer('https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=f0432aedfec8f9aa7b07f0b4472222de', {
      attribution: '&copy; DisasterReady Caribbean',
      APIkey: 'f0432aedfec8f9aa7b07f0b4472222de'
    }),
    clouds: L.tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=f0432aedfec8f9aa7b07f0b4472222de', {
      attribution: '&copy; DisasterReady Caribbean',
      APIkey: 'f0432aedfec8f9aa7b07f0b4472222de'
    }),
    pressure: L.tileLayer('https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=f0432aedfec8f9aa7b07f0b4472222de', {
      attribution: '&copy; DisasterReady Caribbean',
      APIkey: 'f0432aedfec8f9aa7b07f0b4472222de'
    })
  };

  // Default Layer: Temperature
  layers.temperature.addTo(map);

  //Layers
  L.control.layers({}, {
    'Temperature': layers.temperature,
    'Precipitation': layers.precipitation,
    'Wind': layers.wind,
    'Clouds': layers.clouds,
    'Pressure': layers.pressure
  }, {
    position: 'topright'
  }).addTo(map);

  // Current Layer
  function getActiveLayer() {
    for (var layerName in layers) {
      if (map.hasLayer(layers[layerName])) {
        return layerName;
      }
    }
    return null;
  }

  // HTML for Current layer
  function loadLegend() {
    var activeLayer = getActiveLayer();
    if (activeLayer) {
      var legendHTMLPath = './legends/' + activeLayer.toLowerCase() + '-legend.html';
      $('.legend').load(legendHTMLPath);
    }
  }

  // Run the function at the start of the program for Temperature
  loadLegend();

  // Every time the box is clicked it updates The current layer!
  $('.leaflet-control-layers-selector').change(function() {
    loadLegend();
  });
});
