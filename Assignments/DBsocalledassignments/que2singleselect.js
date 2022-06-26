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
con.query(
  "select resourceid, resourcename, status from resource where resourceid=?",
  [resourceid],
  (err, rows) => {
    if (err) {
      console.log("error has occured let us see");
    } else {
      if (rows.length > 0)
        console.log(
          rows[0].resourceid + " " + rows[0].resourcename + " " + rows[0].status
        );
      else console.log("not found with " + resourceid);
    }
  }
);
