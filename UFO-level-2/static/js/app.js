// from data.js


// YOUR CODE HERE!
var tableData = data;

// Console.log tableData
console.log(tableData);


// Reference the table
var tbody=d3.select("tbody");

// Iterate UFO Sighting values for each column using function and console.log
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);

// Append table row `tr` for each UFO Sighting object
 var row = tbody.append("tr");

// Use `Object.entries` to console.log each UFO Sighting value
Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);

// Append a cell to the row for each value
var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the submit button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");

// Remove existing table
d3.select("tbody").html("");

// Prevent page from refreshing
d3.event.preventDefault();


// // Get the value property of input elements
// var inputValue = d3.select("#input").property("value");
    
var dateTime = d3.select("#datetime").property("value");
var selectedCountry = d3.select("#country").property("value").toLowerCase();
var selectedState = d3.select("#state").property("value").toLowerCase();
var selectedCity = d3.select("#city").property("value").toLowerCase();
var selectedShape = d3.select("#shape").property("value").toLowerCase();

// Initialize tableData as filteredData
filteredData = tableData;

// Set if conditions for filter

if (dateTime){
    filteredData=filteredData.filter(sighting => sighting.datetime===dateTime);
}
if (selectedCountry){
    filteredData=filteredData.filter(sighting => sighting.country===selectedCountry);
}
if (selectedState){
    filteredData=filteredData.filter(sighting => sighting.state===selectedState);
}
if (selectedCity){
    filteredData=filteredData.filter(sighting => sighting.city===selectedCity);
}
if (selectedShape){
    filteredData=filteredData.filter(sighting => sighting.shape===selectedShape);
}

    // console.log(filteredData);

    filteredData.forEach(function(selections) {
        console.log(selections);

// Append table row and display filtered dataset using Object.entries to console.log for each UFO Sighting object
    
var row = tbody.append("tr");

Object.entries(selections).forEach(function([key, value]) {
    console.log(key, value);
       
// Append cells to the rows
var cell = row.append("td");
        cell.text(value);
    });
});
});