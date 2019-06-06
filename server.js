var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        name: "John Doe",
        number: '720-555-555',
        email: "johndoe@example.com",
        id: "tracymorganisamediocreactor"
    }
];
//console.log(reservations);
var waitlist = [];




// Handles URL parsing : ROUTE
// =============================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/reservations", function (req, res) {
    var response = {
        'reservations': reservations,
        'waitlist': waitlist
    };
    res.json(response);
})

app.post("/reservations", function (req, res) {
    var newRes = req.body;
    if (reservations.length < 5) {
        reservations.push(newRes);
    } else {
        waitlist.push(newRes);
    }
    res.json(newRes);
})



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})
