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

app.get("/getAreaDetails", (req, resp) => {
  let pincode = req.query.pincode;

  let pinStatus = { status: false, areadetails: { pincode: 0, areaname: "" } };

  con.query(
    "select pincode,areaname from areadetails where pincode=?",
    [pincode],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        if (rows.length > 0) {
          pinStatus.status = true;
          pinStatus.areadetails = rows[0];
        }
      }
      resp.send(pinStatus);
    }
  );
});

app.listen(80, function () {
  console.log("start port at 80");
});

// Database:
// create table areadetails(pincode integer primary key,areaname varchar(15));
// insert into areadetails values(445001,'thane');
// insert into areadetails values(445544,'pune');
