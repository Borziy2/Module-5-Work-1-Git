const http = require("http");
const PORT = 3050;

// http.createServer(function (req, res) {
//   res.write("Hello");
//   res.end();
// }).listen(PORT,() =>{
//     console.log("Server is running!");
// })

// const users = [{ name: "Alex" }, { name: "Bob" }];
// const articles = [{ text: "Hello!" }, { text: "Goodbye!" }];

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
      res.write("<h1>HELLO</h1>");
    }
    if (req.url === "/contact") {
      res.write("<h1>CONTACT</h1>");
    }

    if (req.url === "/articles") {
      res.write("<h1>ARTICLES</h1>");
    }

    res.end();
  })
  .listen(PORT, () => {
    console.log("Server is running!");
  });
