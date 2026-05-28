// Added comment for testing PR

const express = require('express');

const app = express();

const db = require('./db');


// ROUTE
app.get('/athletes', (req, res) => {

    const sql = "SELECT * FROM athletes";

    db.query(sql, (err, result) => {

        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send(result);
        }

    });

});


// SERVER
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
updated