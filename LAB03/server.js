// server.js
const connect = require('connect');
const http = require('http');
const url = require('url');

// Create a Connect app
const app = connect();

// Define calculate function
function calculate(req, res, next) {
    // Parse URL parameters
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    // Extract method, x, and y parameters
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    // Check if x and y are valid numbers
    if (isNaN(x) || isNaN(y)) {
        res.end("Invalid parameters. Both 'x' and 'y' must be numbers.");
        return;
    }

    // Perform math operation based on method parameter
    let result;
    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            if (y === 0) {
                res.end("Cannot divide by zero.");
                return;
            }
            result = x / y;
            break;
        default:
            res.end("Invalid method. Allowed methods are 'add', 'subtract', 'multiply', and 'divide'.");
            return;
    }

    // Display math operation and result
    res.end(`${x} ${method} ${y} = ${result}`);
}

// Mount the calculate function to the root path
app.use('/', calculate);

// Create server
http.createServer(app).listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
