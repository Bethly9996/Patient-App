const express = require("express");
const mysql = require("mysql");
const app = express();
const connection = require('./database');
const patientRoute = require('./routes/patient')

app.get('/', function(req, res) {
    let sql = "SELECT * FROM Patient";
    connection.query(sql, function(err, results) {
        if(err) throw err;
        res.send(results);

    })
    
})

app.listen(3000, function() {
    console.log('App listening on port 3000');
    
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/patient', patientRoute);

module.exports = app;

