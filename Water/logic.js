var myMap = L.map("map", {
    center: [21.3332, -157.8724],
    zoom: 13
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/dark-v10",
    accessToken: 'pk.eyJ1IjoiYnBhcHBhcyIsImEiOiJja2w4YzZubDEyM3RlMndxamgzdjhzdHFrIn0.GoDtJAEoxMquG0hFUheOKw'
  }).addTo(myMap);

  // Working data
  var people = [
    {
      name: "Kevin E.",
      location: [21.285570, -157.835210],
    },
    {
      name: "Derrick J.",
      location: [21.367090, -157.910150],
    },
    {
      name: "Jeffrey F.",
      location: [21.3466046, -157.8843739],
    },
    {
      name: "Edwin R.",
      location: [21.321080, -157.985830],
    },
    {
      name: "Brent B.",
      location: [21.335400, -157.931860],
    },
    {
      name: "Paul W.",
      location: [21.324360, -157.977720],
    },
    {
      name: "Richard P.",
      location: [21.349491, -157.926782],
    },
    {
      name: "Huy V..",
      location: [21.338321, -157.910934],
    },
  ];
  
  var color;

  for (var i = 0; i < people.length; i++) {
    
    color='red'
    
    L.circle(people[i].location, {
      fillOpacity: 0.75,
      color: color,
      fillColor: color,
      radius: 300
    }).bindPopup("<h1>" + people[i].name + "</h1>").addTo(myMap)};