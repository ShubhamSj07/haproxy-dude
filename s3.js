const http = require("http");

const PORT = 4442;

http
  .createServer((req, res) => {
    console.log(`Request received at server 3`);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Server 3");
  })
  .listen(PORT, () => {
    console.log(`Server 3 running on port ${PORT}`);
  });
