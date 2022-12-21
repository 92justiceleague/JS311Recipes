const express = require('express');
const app = express();
const port = 3000;

// Define the static file directory
app.use(express.static('public'));

// Import the routes file
const routes = require('./routes');

// Use the routes defined in the routes file
app.use('/', routes);

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});