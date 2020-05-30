const http = require("http");

// Server
http.createServer(router).listen(3000);

function router(req, res) {
  console.log(req.url);

  switch (req.url) {
    case "/main":
      res.write("Hello");
      res.end();
      break;
    default:
      res.write("Default access");
      res.end();
  }

  //   res.writeHead(201, { "Content-Type": "text/plain" });
  //   res.end();
}

console.log("listen 3000");
