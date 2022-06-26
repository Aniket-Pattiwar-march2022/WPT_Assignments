const express = require("express");
const app = express();
const mysql = require("mysql2");
let dbparams = {
  host: "localhost",
  user: "aniket",
  password: "cdac",
  database: "byaniket",
  port: 3306,
};

const con = mysql.createConnection(dbparams);
app.use(express.static("sf"));

app.get("/getBalance", (req, resp) => {
  let acno = req.query.acno;

  let acnoStatus = { status: false, balancedetails: { acno: 0, balance: "" } };

  con.query(
    "select acno,balance from balancedetails where acno=?",
    [acno],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        if (rows.length > 0) {
          acnoStatus.status = true;
          acnoStatus.balancedetails = rows[0];
        }
      }
      resp.send(acnoStatus);
    }
  );
});

app.listen(80, function () {
  console.log("start port at 80");
});

// Database:
// create table balancedetails(acno integer primary key,balance varchar(15));
// insert into balancedetails values(12821,'150000');
// insert into balancedetails values(12822,'100000');
