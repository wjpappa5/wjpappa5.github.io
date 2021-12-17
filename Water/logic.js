var myMap = L.map("map", {
    center: [21.3728, -157.9300],
    zoom: 12
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
      name: "Huy V.",
      location: [21.338321, -157.910934],
    },
    {
      name: "Kevin S.",
      location: [21.342278, -157.902931],
    },
    {
      name: "Jeffrey L.",
      location: [21.324629, -157.980375],
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

  var extra = [
      {
        name: "Frances H.",
        location: [21.403378, -157.749662],
      },
      {
        name: "Kevin D.",
        location: [21.307192, -157.841141],
      },
      {
        name: "Jason H.",
        location: [21.374135, -157.973887],
      },
      {
        name: "Jacky C.",
        location: [21.296715, -157.850739],
      },
      {
        name: "Christopher P.",
        location: [21.420319, -157.795147],
      },
      {
        name: "Katherine P.",
        location: [21.408504, -157.794495],
      },
      {
        name: "Todd H.",
        location: [21.384092, -157.750519],
      },
      {
        name: "Erin H.",
        location: [21.284815, -157.832428],
      },
      {
        name: "Katie J.",
        location: [21.412300, -157.801964],
      },
      {
        name: "Vincent G.",
        location: [21.307659, -157.782336],
      },
      {
        name: "Jerry S.",
        location: [21.312147, -157.857910],
      },
      {
        name: "James T.",
        location: [21.314846, -157.856085],
      },
      {
        name: "Patrick T.",
        location: [21.532400, -158.047735],
      },
      {
        name: "Brian F.",
        location: [21.426273, -157.747153],
      },
      {
        name: "Kipp M.",
        location: [21.384270, -157.742966],
      },
      {
        name: "Anthony C.",
        location: [21.283416, -157.828297],
      },
      {
        name: "Nicole J.",
        location: [21.286490, -157.836504],
      },
      {
        name: "Jon P A.",
        location: [21.354080, -157.921402],
      },
      {
        name: "Coreena J.",
        location: [21.391242, -157.931689],
      },
      {
        name: "Walter S.",
        location: [21.426420, -157.793913],
      },
      {
        name: "Matthew H.",
        location: [21.279787, -157.748570],
      },
      {
        name: "Conner H.",
        location: [21.287310, -157.827856],
      },
      {
        name: "Renny C.",
        location: [21.404015, -158.032411],
      },
      {
        name: "Ann N.",
        location: [21.324763, -157.800923],
      },
      {
        name: "Kristina H.",
        location: [21.437002, -157.824921],
      },
      {
        name: "Elizabeth C.",
        location: [21.452022, -157.824233],
      },
      {
        name: "Derek F.",
        location: [21.304547, -157.855676],
      },
      {
        name: "Enrik R.,",
        location: [22.056000, -159.982480],
      },
      {
        name: "Boris P..",
        location: [21.308271, -158.015265],
      },
      {
        name: "William T.",
        location: [21.397455, -157.980010],
      },
      {
        name: "MIchael P.",
        location: [21.330198, -158.017957],
      },
      {
        name: "William J.",
        location: [21.368045, -157.769217],
      },
      {
        name: "Ryan A.",
        location: [21.358807, -157.926093],
      },
      {
        name: "Cliff H.",
        location: [21.422884, -157.794783],
      },
      {
        name: "Robert R.",
        location: [21.376303, -157.740988],
      },
      {
        name: "Dave G.",
        location: [21.302110, -157.852309],
      },
      {
        name: "Justin Y.",
        location: [21.395290, -157.803846],
      },
      {
        name: "Joseph L.",
        location: [21.320636, -158.021871],
      },
      {
        name: "Tiffany T.",
        location: [21.358764, -158.087328],
      },
      {
        name: "Matthew L.",
        location: [21.287125, -157.826125],
      },
      {
        name: "Bethany O.",
        location: [21.419732, -157.958267],
      },
      {
        name: "Christian L.",
        location: [21.385961, -157.937198],
      },
      {
        name: "Jonathan M.",
        location: [21.386825, -157.910229],
      },
      {
        name: "Kate K.",
        location: [21.393330, -157.907670],
      },
      {
        name: "Carl J.",
        location: [21.296393, -157.676891],
      },
      {
        name: "Michael A.",
        location: [21.400867, -157.938884],
      },
      {
        name: "Tafiaina S.",
        location: [21.348633, -157.901893],
      },
      {
        name: "Glenn C.",
        location: [21.330198, -158.017957],
      },
      {
        name: "Russell S.",
        location: [21.299959, -157.861355],
      },
      {
        name: "Michael T.",
        location: [21.309852, -158.022558],
      },
      {
        name: "Angela H.",
        location: [21.403761, -157.949658],
      },
      {
        name: "Christopher E L.",
        location: [21.319790, -157.856439],
      },
      {
        name: "Kevin K.",
        location: [21.422557, -157.801849],
      },
      {
        name: "Carolina R-E.",
        location: [21.340949, -158.117390],
      },
    ];
  
    for (var i = 0; i < extra.length; i++) {
      
      color='yellow'
      
      L.circle(extra[i].location, {
        fillOpacity: 0.75,
        color: color,
        fillColor: color,
        radius: 50
      }).bindPopup("<h1>" + extra[i].name + "</h1>").addTo(myMap)};