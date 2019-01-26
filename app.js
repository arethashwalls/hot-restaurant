var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FILENAME HERE'));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'FILENAME HERE'));
});

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'FILENAME HERE'));
});

app.get('/api/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'FILENAME HERE'));
});

app.get('/api/waitlist', (req, res) => {
    res.sendFile(path.join(__dirname, 'FILENAME HERE'));
});

app.listen(PORT, function() {
    console.log("HotRestuarant is listening at Port " + PORT);
  });
