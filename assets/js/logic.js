// Create a map object
console.log("Hello");

var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

//var dataStr = JSON.stringify("/assets/data.js")
//    console.log(data);

// var data = JSON.parse(dataStr);

// Crash data
// var data = dataStr;

// var mark = L.marker(
//  L.latLng(
//    parseFloat(data["latitude"]),
//    parseFloat(data["long"])
//  )
//);

var crashes = [
  {
    name: "Atlantic City",
    location: [39.3606, -74.4319],
    fatalities: 5.0,
    date: "7/12/1912",
  },
  {
    name: "Victoria",
    location: [48.4275, -123.3673],
    fatalities: 1.0,
    date: "8/6/1913",
  },
  {
    name: "North Sea",
    location: [40.940556, -72.4031],
    fatalities: 14.0,
    date: "9/9/1913",
  },
  {
    name: "Tienen",
    location: [50.8055, 4.9394],
    fatalities: 21.0,
    date: "3/5/1915",
  },
  {
    name: "Billericay",
    location: [51.6301, 0.4212],
    fatalities: 22.0,
    date: "9/24/1916",
  },
  {
    name: "Potters Bar",
    location: [51.6923, -0.1787],
    fatalities: 19.0,
    date: "10/1/1916",
  },
  {
    name: "Mainz",
    location: [50.0, 8.2667],
    fatalities: 27.0,
    date: "11/21/1916",
  },
  {
    name: "Elizabeth",
    location: [40.6619, -74.2117],
    fatalities: 1.0,
    date: "12/16/1918",
  },
  {
    name: "Cleveland",
    location: [41.4822, -81.6697],
    fatalities: 1.0,
    date: "5/25/1919",
  },
  {
    name: "Mix Run",
    location: [41.3398, -78.1966],
    fatalities: 1.0,
    date: "7/19/1919",
  },
  {
    name: "Newcastle upon Tyne",
    location: [54.9667, -1.6],
    fatalities: 1.0,
    date: "10/2/1919",
  },
  {
    name: "Edison",
    location: [40.504, -74.3494],
    fatalities: 2.0,
    date: "1/9/1971",
  },
  {
    name: "Zürich",
    location: [47.3667, 8.55],
    fatalities: 45.0,
    date: "1/18/1971",
  },
  {
    name: "Surgut",
    location: [61.25, 73.4333],
    fatalities: 13.0,
    date: "1/22/1971",
  },
  {
    name: "São Pedro da Aldeia",
    location: [-22.8389, -42.1028],
    fatalities: 8.0,
    date: "10/2/1988",
  },
  {
    name: "Mérida",
    location: [20.9678, -89.6243],
    fatalities: 18.0,
    date: "1/25/1971",
  },
  {
    name: "Luhansk",
    location: [48.5667, 39.3],
    fatalities: 7.0,
    date: "1/31/1971",
  },
  {
    name: "Aguadilla",
    location: [18.43, -67.1544],
    fatalities: 3.0,
    date: "2/7/1971"
  },
  {
    name: "Guwahati",
    location: [26.1833, 91.7333],
    fatalities: 15.0,
    date: "3/26/1971",
  },
  {
    name: "Luhansk",
    location: [48.5667, 39.3],
    fatalities: 64.0,
    date: "3/31/1971",
  },
  {
    name: "Kayenta",
    location: [36.7142, -110.2603],
    fatalities: 2.0,
    date: "4/20/1971",
  },
  {
    name: "Manchester",
    location: [42.9909, -71.4631],
    fatalities: 4.0,
    date: "4/22/1971",
  },
  {
    name: "Coolidge",
    location: [32.9772, -111.5231],
    fatalities: 12.0,
    date: "5/6/1971",
  },
  {
    name: "Guatemala City",
    location: [14.6133, -90.5353],
    fatalities: 5.0,
    date: "5/11/1971",
  },
  {
    name: "Anaktuvuk Pass",
    location: [68.1431, -151.7336],
    fatalities: 2.0,
    date: "5/12/1971",
  },
  {
    name: "Takaka",
    location: [-40.8597, 172.8059],
    fatalities: 10.0,
    date: "12/6/1971"
  },
  {
    name: "New Haven",
    location: [41.31, -72.9236],
    fatalities: 28.0,
    date: "6/7/1971"
  },
  {
    name: "Garberville",
    location: [40.1, -123.8],
    fatalities: 17.0,
    date: "6/27/1971"
  },
];


// Loop through the crashes array and create one marker for each crash
for (var i = 0; i < crashes.length; i++) {

  // Conditionals for crash points
  var color = "";
  if (crashes[i].fatalities >= 40) {
    color = "indigo";
  }
  else if (crashes[i].fatalities <= 39 && crashes[i].fatalities >= 26) {
    color = "orangered";
  }
  else if (crashes[i].fatalities <= 25 && crashes[i].fatalities >= 11) {
    color = "palegreen";
  }
  else {
    color = "gold";
  }


  // Add circles to map
  L.circleMarker(crashes[i].location, {
    fillOpacity: 0.75,
    color: color,
    fillColor: color,
    // Adjust radius
    radius: crashes[i].fatalities * 25
  }).bindPopup("<h1>" + crashes[i].name + "</h1> <hr> <h3>Fatalities: " + crashes[i].fatalities + "</h3> <hr> <h3>" + crashes[i].date + "<h3>").addTo(myMap);
}
