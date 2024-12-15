const http = require("http");

const PORT = 4440;

http
  .createServer((req, res) => {
    console.log(`Request received at server 1`);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Server 1");
  })
  .listen(PORT, () => {
    console.log(`Server 1 running on port ${PORT}`);
  });
