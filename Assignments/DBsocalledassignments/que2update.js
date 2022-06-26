const url = "";
let dbparams = {
  host: "localhost",
  user: "aniket",
  password: "cdac",
  database: "byaniket",
  port: 3306,
};
const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);

let resourcename = "MDN";
let status = "True";
let resourceid = 11;

con.query(
  "update resource set resourcename =?,status =? where resourceid=? ",
  [resourcename, status, resourceid],
  (err, res) => {
    if (err) {
      console.log("error has occured let us see");
    } else {
      if (res.affectedRows === 0) {
        console.log("update failed");
      } else console.log("update succeeded");
    }
  }
);
