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

    // Question: What does this code do??
    $.post("/api/table", newTable)
        .then(function (data) {
            console.log(data);
            alert("Reservation Added!");
        });
});

app.post("/api/table", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;

    console.log(newTable.id);

    reservedTables.push(newTable);

    res.json(newTable);
});