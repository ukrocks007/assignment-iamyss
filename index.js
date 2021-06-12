const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http');
const mongoose = require("mongoose");
const path = require("path");

// Import all models
const Team = require("./models/team");
const Player = require("./models/player");

const config = require("./config");

const apis = require("./apis");

// MongoDB connection
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
}).then(success => {
    console.log("MongoDB connected!!!", config.mongoUri);
}).catch(err => {
    console.log("MongoDB connection failed!!!", err)
});

const app = express();
app.use(cors({
    exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json({
    limit: "1000kb"
}));

apis(app);
app.use('/', express.static(path.join(__dirname, 'build')))

var server = http.createServer(app);

app.use('*', express.static(path.join(__dirname, 'build')))

app.server = server;

app.server.listen(process.env.PORT || config.port);

console.log(`Started on port ${app.server.address().port}`);
