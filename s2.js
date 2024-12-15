const http = require("http");

const PORT = 4441;

http
  .createServer((req, res) => {
    console.log(`Request received at server 2`);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Server 2");
  })
  .listen(PORT, () => {
    console.log(`Server 2 running on port ${PORT}`);
  });
