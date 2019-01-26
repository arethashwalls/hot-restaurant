const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// reserved tables
var reservedTables = [{
    name: "John",
    number: "111-111-1111",
    email: "aol@aol.com",
    id: "1"
},
{
    name: "Tessa",
    number: "222-222-2222",
    email: "gmail@gmail.com",
    id: "2"
},
];

// wait-listed tables
var waitlistedTables = [{
    name: "Greg",
    number: "333-333-3333",
    email: "aol@aol.com",
    id: "3"
},
{
    name: "Tessa",
    number: "444-444-4444",
    email: "gmail@gmail.com",
    id: "4"
},
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'FILENAME HERE'));
});

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'FILENAME HERE'));
});

app.get('/api/tables', (req, res) => {
    return res.json(reservedTables);
});

app.get('/api/waitlist', (req, res) => {
    return res.json(waitlistedTables);
});

app.listen(PORT, function() {
    console.log("HotRestuarant is listening at Port " + PORT);
  });
