const express = require("express");
const app = express();

// app.use(express.static("cp"));
app.use(express.static("cp"));

app.get("/addItem", (req, resp) => {
  resp.send("add item needs to be done");
  console.log("hii add");
});

app.get("/updateItem", (req, resp) => {
  resp.send("update item needs to be done");
  console.log("hii update");
});

app.listen(900, function () {
  console.log("server listening at port 900...");
});
