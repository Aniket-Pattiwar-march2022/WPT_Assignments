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

let itemno = 1;
let itemname = "sugar";
let price = 100;
let category = "grocery";
con.query(
  "insert into item(itemno,itemname,price,category) values (?,?,?,?)",
  [itemno, itemname, price, category],
  (err, res) => {
    if (err) {
      console.log("error has occured let us see");
    } else {
      console.log(res.affectedRows);
    }
  }
);
