// Creating map object
  
// Creating map object
var myMap = L.map("map", {
  center: [37.697, -97.314],
  zoom: 5
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken:'pk.eyJ1Ijoid2pwYXBwYXMiLCJhIjoiY2traGpneHM1MDBqOTJ3cW5yODI5emUxNSJ9.N1ijsLc2UYQvliuaFtrRPw'
}).addTo(myMap);


// For now we will use this static file, dumped from the mySQL db
// In subsequent iterations, we will have the file dumped from the db, and then pass it to
// the program.
// I imported a zip-code-to-latlng file so that we can make the maps dynamically
var greyIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

url = '../data/DOGeo.json'

// Grab the data with d3
d3.json(url, function(response) {

  console.log(response);
  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var lat = response[i].Latitude;
    var lng = response[i].Longitude;

    //console.log(lat);
    //console.log(lng);


    // Add a new marker to the cluster group and bind a pop-up
    if(lat && lng) {
      markers.addLayer(L.marker([lat, lng],{icon: greyIcon})
        .bindPopup("<h1 style='text-align:center;'>" + response[i].DOMember + "</h1> <hr> <h2 style='text-align:center;'>" + response[i].DOPhone + "</h2>"));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});