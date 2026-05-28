# Open each file and add a comment at the top
// Added for PR testing

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sush@1234',
    database: 'sportsdb'
});

db.connect((err) => {

    if(err){
        console.log(err);
    }
    else{
        console.log("Connected to MySQL");
    }

});

module.exports = db;