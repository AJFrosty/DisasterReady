$(function() {
  var map = L.map('map').setView([17.087635, -61.772346], 13);

  // Tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  var layers = {
    temperature: L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=f0432aedfec8f9aa7b07f0b4472222de', {
      attribution: '&copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
      APIkey: 'API_KEY'
    }),
    precipitation: L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=f0432aedfec8f9aa7b07f0b4472222de', {
      attribution: '&copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
      APIkey: 'API_KEY'
    }),
    wind: L.tileLayer('https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=f0432aedfec8f9aa7b07f0b4472222de', {
      attribution: '&copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
      APIkey: 'API_KEY'
    }),
    clouds: L.tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=f0432aedfec8f9aa7b07f0b4472222de', {
      attribution: '&copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
      APIkey: 'API_KEY'
    }),
    pressure: L.tileLayer('https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=f0432aedfec8f9aa7b07f0b4472222de', {
      attribution: '&copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
      APIkey: 'API_KEY'
    })
  };

  // Default Layer [Temperature]
  layers.temperature.addTo(map);

  // Function to Legend from Checkbox
  function updateLegends() {
    if ($('#temperature-layer').is(':checked')) {
      $('#temperature-legend').show();
    } else {
      $('#temperature-legend').hide();
    }

    if ($('#precipitation-layer').is(':checked')) {
      $('#precipitation-legend').show();
    } else {
      $('#precipitation-legend').hide();
    }

    if ($('#wind-layer').is(':checked')) {
      $('#wind-legend').show();
    } else {
      $('#wind-legend').hide();
    }

    if ($('#clouds-layer').is(':checked')) {
      $('#clouds-legend').show();
    } else {
      $('#clouds-legend').hide();
    }

    if ($('#pressure-layer').is(':checked')) {
      $('#pressure-legend').show();
    } else {
      $('#pressure-legend').hide();
    }
  }

  // Function to Update Legend
  function updateLegendContent() {
    $('#temperature-legend').html('Temperature Scale: Add temperature scale content here');
    $('#precipitation-legend').html('Precipitation Scale: Add precipitation scale content here');
    $('#wind-legend').html('Wind Speed Scale: Add wind speed scale content here');
    $('#clouds-legend').html('Clouds Scale: Add clouds scale content here');
    $('#pressure-legend').html('Sea Level Pressure Scale: Add sea level pressure scale content here');
  }

  // Check to see if checkbox changed
  $('.layer-checkbox input[type="checkbox"]').change(function() {
    updateLegends();
  });

  // Runs the Update Function
  updateLegendContent();

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

  // Run Updated Layers Functin
  // updateLayers();
});
