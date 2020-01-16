// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // clear existing data
  tbody.html("");

  // loop through each object and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // append row to table body
    var row = tbody.append("tr");

    // loop through each field in dataRow and add each value as td
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // get datetime
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // check date  and filter data
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  buildTable(filteredData);
}

// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build table when page loads
buildTable(tableData);
