// Our newest addition to the dependency family
var mongoose = require("mongoose");
var logger = require("morgan");
var cors = require('cors');

// Middleware necessary for front end to talk to backend
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
}));
// Requiring the `Example` model for accessing the `examples` collection
var Driver = require("./models/Driver.js");
var Sender = require("./models/Sender.js");
var Inventory = require("./models/Inventory.js");

// Connect to the MongoDB
mongoose.connect("mongodb://localhost/schemaexample", { useNewUrlParser: true });

// Create an object containing dummy data to save to the database
var driver = {
  array: ["driver1", "driver2", "driver3"],
  string: []
  //   "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
};

var sender = {
    array: ["sender1", "sender2", "sender3"],
    string: []
    //   "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  };

  var Inventory = {
    array: ["package1", "package2", "package3"],
    string: []
    //   "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  };

// Save a new Example using the data object
Example.create(data)
  .then(function(dbDriver) {
    // If saved successfully, print the new Example document to the console
    console.log(dbDriver);
  })
  .catch(function(err) {
    // If an error occurs, log the error message
    console.log(err.message);
  });