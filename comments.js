const http = require('http');

// Create a server that returns "Hello World!" to the client
const server = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
});

// Listen on port 8080
server.listen(8080);

