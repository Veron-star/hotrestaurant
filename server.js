// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
const { response } = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


 
var waitingList = []

var reservations = [
    {
        "customerName": "thibs",
        "phoneNumber": "004",
        "customerEmail": "d@re.be",
        "customerID": "123"
    },{
        "customerName": "Veron",
        "phoneNumber": "007",
        "customerEmail": "d@re.be",
        "customerID": "124"
    }]

 
// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"))
});

app.post("/api/reservations", function(req, res) {
    newReservation = req.body;
    if (reservations.length === 5) {
        waitingList.push(newReservation)
        res.end("You are on the waiting list")
    } else {
        reservations.push(newReservation);
        res.end("You are Booked IN!")
    }
});
 
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitinglist", function(req,res) {
    return res.json(waitingList);
});

 

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
