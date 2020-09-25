// from data.js
var tableData = data;

// YOUR CODE HERE!

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

// Prevent page from refreshing
d3.event.preventDefault();

// Get the value property of input elements
var inputValue = d3.select("#input").property("value");
 
    console.log(inputValue);

// Filter Data for value property of input elements date, country, state, city and shape
var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                sighting.city === inputValue ||
                                                sighting.state === inputValue ||
                                                sighting.country === inputValue ||
                                                sighting.shape === inputValue);
    

    console.log(filteredData);

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