
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

// d3
// .json("assets/js/data.js")
// .then(data=>{
//   console.log(data);
//   var crash_data = data;
//   console.log(crash_data)

// Load data from csv
d3.csv("/data/take_3.csv").then(function(data) {
  var crash_data = data;
  console.log(crash_data) 

  // Select the button
  var button = d3.select("#filter-btn");
  
  // Select the form
  var form = d3.select("#form");
  
  var tbody = d3.select("tbody");
  
  button.on("click", runEnter);
  form.on("submit",runEnter);
  
  var crash_data_full = crash_data
  
  console.log(crash_data_full);
  
  data.forEach((data) => {
   
   var row = tbody.append("tr");
   
   Object.entries(data).forEach(function([key, value]) {
     
     var cell = row.append("td");
     
     cell.text(value);
   })
  })
  
  // Complete the event handler function for the form
  function runEnter() {
  
    // Prevent the page from refreshing
    // d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    // Build table
    
    // Clear out table
    tbody.html("");
  
    // Filter 
    
    var filteredData = data.filter(crash => crash.Date === inputValue);
  
    console.log(filteredData);
  
    filteredData.forEach((data) => {
      
      var row = tbody.append("tr");
      
      Object.entries(data).forEach(function([key, value]) {
        
        var cell = row.append("td");
        
        cell.text(value);
      })
    })
  }
})
