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

let price = 200;
let category = "dailygrocery";
let itemno = 1;

con.query(
  "update item set price =?,category =? where itemno=? ",
  [price, category, itemno],
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
