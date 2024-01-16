const express = require('express');
const App = express();
const port = 5000;
const dotenv = require('dotenv');
const connectToDB = require('./db');
const user = require('./routes/user');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

dotenv.config();
connectToDB();
App.use(cors(
    {
        // origin: 'https://king-kart.vercel.app',
    }
));

// Parse application/json
App.use(bodyParser.json());

// Parse application/json
App.use(bodyParser.urlencoded({ extended: false }));
App.use(express.json());
App.use('/api/user', user);
express.static(path.join(__dirname, "/dist/assets")),

// Serve static files
App.use(express.static(path.join(__dirname, '/build')));

// Catch-all route
App.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

App.listen(port, () => {
    console.log(`Propert-Ease Server Listening at http://localhost:${port}`)
})