// Foundation
require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// logger
const logger = require("morgan");
app.use(logger("dev"));

// body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// CONNECTION
// Need the env variables we created - destructure
const {PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PW} = process.env
const credentials = {
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DB,
    user: PG_USER,
    password: PG_PW
}

const {Client} = require("pg"); // use postgres client object
const conn = new Client(credentials);
conn
    .connect()
    .then(console.log(`Connected to ${PG_DB} database`))
    .catch(err => console.log(`Yo! Randy, I got an error: ${err}`))
    

// Route Handlers

app.get("/employee/all", (req, res) => {
    let query = `SELECT *
                FROM employees;`
    conn.query(query)
    .then(data => {
        res.json(data.rows)
    })
    .catch(err => res.send(`Error reading data: ${err}`));
})

app.post("/employee/new", (req, res) => {
    // data will be sent from client as body
    const {first_name, last_name, age, salary} = req.body;
    let query = `INSERT INTO employees (first_name, last_name, age, salary)
                VALUES ('${first_name}', '${last_name}', ${age}, ${salary})
                RETURNING *;`;
    conn
    .query(query)
    .then(data => {
        console.log("DATA has been added to DB");
        res.json(data.rows[0])
    })
    .catch(err => res.send(`Error posting data: ${err}`));
})

app.delete("/employee/:id", (req, res) => {
    let query = `DELETE FROM employees
                WHERE employee_id = ${Number(req.params.id)}
                RETURNING *;`;
    conn
    .query(query)
    .then(data => {
        console.log("DATA has been deleted from DB");
        res.json(data.rows[0])
    })
    .catch(err => res.send(`Error deleting data: ${err}`));
})

app.put("/employee/:id", (req, res) => {
    const {first_name, last_name, age, salary} = req.body
    let query = `UPDATE employees
                SET first_name='${first_name}',
                    last_name='${last_name}',
                    age=${age},
                    salary=${salary}
                WHERE employee_id = ${Number(req.params.id)}
                RETURNING *;`
    conn
    .query(query)
    .then(data => {
        console.log("DATA has been updated");
        res.json(data.rows[0])
    })
    .catch(err => res.send(`Error updating data: ${err}`));
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