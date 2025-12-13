const express = require("express");
const app = express();
// const cors = require("cors");
const port = 5173;
const mysql = require("mysql2");

// app.use(cors());

const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "spiderman",
  database: "wedding_submissions",
});

app.get("/test", (req, res) => {
  db.query("INSERT INTO submissions (name, food, carpool, sleepover, arriveFriday, songWishlist) VALUES ('Patrick Test', 'Kött', '1', '0', '1', 'NULL')", (error, result) => {
    if (error) {
      console.log("Error: ", error);
    } else {
      console.log("Success: ", result);
    }
  });
});

app.listen(port, (data) => {
  console.log(`Example app is listening to port ${port}`);
});
