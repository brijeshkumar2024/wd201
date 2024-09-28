const http = require('http');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');


const args = minimist(process.argv.slice(2));
const port = args.port || 3000; 

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        
        fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading home.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/registration') {
       
        fs.readFile(path.join(__dirname, 'registration.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading registration.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/project') {
       
        fs.readFile(path.join(__dirname, 'project.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading project.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
