// Dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoportfolio database
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/portfolio';

// connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

// Send every other request to the React app
//  Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(pathjoin(__dirname, "./eddean-port/build/index.html"));
});

// Start the API server
app.listen(PORT, () => {
    console.log(`API server now listening on PORT ${PORT}!`);
});