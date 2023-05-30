// Foundation
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// logger
const logger = require("morgan");
app.use(logger("dev"));


// Route Handlers

app.get("/employees/all", (req, res) => {
    res.send("ALL employees")
})

app.get("*", (req, res) => {
    res.send("No routes matching");
});


// Consuming APIs
// 1 - know endpoints
// 2 - what format data will be, JSON/XML
// 3 - how much data and what does it look like

// Note: your boss says:
// need 5 route handlers
// 1) star handling
    // deals with any unmatched routes
    // right now - probably sends a string back with comments
// 2) /employee/all
    // GET method
    // send back JSON
    // send back ALL employees from the DB
    // send back an array of objects
// 3) /employee/new
    // POST method
    // send back JSON
    // one thing - data that DB confirmed was added
    // one object - BUT initial return maybe an array of object
// 4) /employee/<<id>> - UPDATE
    // PUT method
    // send JSON
    // one thing - data that DB confirmed was added
    // one object - BUT initial return maybe an array of object
// 5) /employee/<<id>> - 2nd - DELETE
    // DELETE method
    // send JSON
    // one thing - data that DB confirmed was deleted
    // one object - BUT initial return maybe an array of object


// Listener

app.listen(port, () => {
    console.log(`Employee server on port ${port}`);
})