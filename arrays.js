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


$("#add-btn").on("click", function (event) {
    event.preventDefault();
    var newTable = {
        name: $("#name").val().trim(),
        number: $("#number").val().trim(),
        email: $("#email").val().trim(),
        id: $("#id").val().trim()
    };
    if (reservedTables.length < 5) {
        $.post("/api/table", newTable)
            .then(function (data) {
                console.log(data);
                alert("Reservation Added!");
            });
    } else {
        $.post("/api/waitlist", newTable)
            .then(function (data) {
                console.log(data);
                alert("Reservation Added!");
            });
    }

});

app.post("/api/table", function (req, res) {
    var newTable = req.body;

    console.log(newTable.id);

    reservedTables.push(newTable);

    res.json(newTable);
});

app.post("/api/waitlist", function (req, res) {
    var newTable = req.body;

    console.log(newTable.id);

    waitlistedTables.push(newTable);

    res.json(newTable);
});