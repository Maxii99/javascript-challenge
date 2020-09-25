// from data.js
var tableData = data;

// YOUR CODE HERE!

// Console.log tableData
console.log(data);

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

// Prevent page from refreshing
d3.event.preventDefault();

// Get the value property of input element
var dateTime = d3.select("#datetime").property("value");
 
    console.log(dateTime);

// Filter Data with datetime equal to input value
var filteredData = tableData.filter(sighting => sighting.datetime === dateTime);

    console.log(filteredData);

    filteredData.forEach(function(selections) {
        console.log(selections);

// Append table row and display filtered dataset using Object.entries to console.log for each UFO Sighting object
    
var row = tbody.append("tr");

Object.entries(selections).forEach(function([key, value]) {
    console.log(key, value);
       
// Append a cell to the row for each value
var cell = row.append("td");
        cell.text(value);
    });
});
});
