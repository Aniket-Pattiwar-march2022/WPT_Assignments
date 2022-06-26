let dbparams = {
  host: "localhost",
  user: "aniket",
  password: "cdac",
  database: "byaniket",
  port: 3306,
};
const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);
let status = "true";

con.query(
  "select resourceid,resourcename,status from resource where status=?",
  [status],
  (err, rows) => {
    if (err) {
      console.log("error has occured let us see");
    } else {
      if (rows.length > 0) {
        for (let i = 0; i < rows.length; i++)
          console.log(
            rows[i].resourceid +
              " " +
              rows[i].resourcename +
              " " +
              rows[i].status
          );
      } else console.log("not found with " + status);
    }
  }
);
