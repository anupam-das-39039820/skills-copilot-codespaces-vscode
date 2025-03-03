// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express instance
const app = express();
// 3. Define the port
const port = 3000;
// 4. Define the route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 5. Run the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// 6. Create a route for comments
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});