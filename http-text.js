import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     res.end('<h1>Hello World!</h1>');
// });

// const server = http.createServer((req, res) => {
//     res.end(req.url);
// });

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    const name = req.url.split('=')[1];
        res.write(`<h1>Hello ${name}</h1>`);
    res.end();
});

server.listen(port, () => {
    console.log(`Server started on port ${port}. Press Ctrl-C to finish`);
});


