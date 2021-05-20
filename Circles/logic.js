var myMap = L.map("map", {
    center: [38.88584, -77.00829],
    zoom: 17
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: 'pk.eyJ1IjoiYnBhcHBhcyIsImEiOiJja2w4YzZubDEyM3RlMndxamgzdjhzdHFrIn0.GoDtJAEoxMquG0hFUheOKw'
  }).addTo(myMap);
  
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  // Working data
  var construction = [
    {
      name: "Cannon 1A",
      location: [38.88736, -77.00768],
      description: "Cannon 1st floor ADA exit on NJ Ave NW<br>Door closed for Construction<br>" + date + " : 2021-06-01"
    },
    {
      name: "Cannon 1B",
      location: [38.88738, -77.00615],
      description: "Cannon 1st floor NE exit onto Independence Ave<br>Door closed for construction<br>June 1 – June 12"
    },
    {
      name: "Upper D Park",
      location: [38.88555, -77.00825],
      description: "Upper D Park<br>Closed for sidewalk and grounds work<br>August 1 – September 3"
    },
    {
      name: "Stairwell 6",
      location: [38.88633, -77.00639],
      description: "Stairwell 6<br>Closed for Cannon Renewal<br>" + date + " : 2025-06"
    },
  ];
  
  var color;

  for (var i = 0; i < construction.length; i++) {
    
    color='red'
    
    L.circle(construction[i].location, {
      fillOpacity: 0.75,
      color: color,
      fillColor: color,
      radius: 30
    }).bindPopup("<h1>" + construction[i].name + "</h1> <hr> <h3>" + construction[i].description + "</h3>").addTo(myMap)};