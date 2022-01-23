const _ = require("lodash");

// Original array
var animals = ["cat", "dog", "dinosour", "deer", "dinosour"];

// Using the _.groupBy() method
let grouped_data = _.groupBy(animals, function (word) {
  return word.charAt(0) === "d" ? "starts with a d" : "does not start with a d";
});

console.log(grouped_data);
