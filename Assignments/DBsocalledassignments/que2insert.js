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

let resourceid = 11;
let resourcename = "wikipedia";
let status = "false";

con.query(
  "insert into resource(resourceid,resourcename,status) values (?,?,?)",
  [resourceid, resourcename, status],
  (err, res) => {
    if (err) {
      console.log("error has occured let us see");
    } else {
      console.log(res.affectedRows);
    }
  }
);
