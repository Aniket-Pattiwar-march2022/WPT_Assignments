const http = require("http");
const url = require("url");
// console.log(http);
// console.log(url);
// console.log(params.x);
http
  .createServer((req, res) => {
    let params = url.parse(req.url, true).query;
    let diameter = params.x * 2;

    res.write("Diameter : " + diameter);
    res.end();
  })
  .listen(800);
