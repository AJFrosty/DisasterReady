// Load JSON data from file
$.getJSON('shelters.json', function (data) {
  // Initialize Map Location to Antigua
  var map = L.map('map').setView([17.087635, -61.772346], 13);

  // Add the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add markers and bind popups
  data.countries.forEach(function (country) {
    country.shelters.forEach(function (shelter) {
      shelter.locations.forEach(function (location) {
        var marker = L.marker([location.latitude, location.longitude]).addTo(map);

        var popupContent = `
          <strong>${location.name}</strong><br>
          Contact: ${location.contact}
        `;

        marker.bindPopup(popupContent);

        // Show content card on marker hover
        marker.on('mouseover', function () {
          showContentCard(location.name, location.contact);
        });

        // Hide content card on marker mouseout
        marker.on('mouseout', function () {
          hideContentCard();
        });
      });
    });
  });
});

// Show content card
function showContentCard(name, contact) {
  $('#shelter-name').text(name);
  $('#contact-info').text('Contact: ' + contact);
  $('#content-card').fadeIn();
}

// Hide content card
function hideContentCard() {
  $('#content-card').fadeOut();
}
