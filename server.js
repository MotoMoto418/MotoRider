const express = require('express');
const mongoose = require('mongoose');
const Model = require('./mongo');
const bodyParser = require('body-parser');
const cors = require('cors');

Bike = Model.Bike;
User = Model.User;

// Connect to MongoDB
try {
    mongoose.connect("mongodb://127.0.0.1:27017/MotoRider", () => {
        console.log("Connected")
    }, e => console.error(e))
}

catch {
    mongoose.connect("mongodb://localhost:27017/MotoRider", () => {
        console.log("Connected")
    }, e => console.error(e))
}



const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
      origin: 'http://localhost:4000',
      credentials: true,
    })
  );
  

app.get("/signup", (req, res) => {
    // MongoDB query
    console.log(req.body);
    res.send("request received");
})

app.post("/signup", (req, res) => {
    console.log(req.body);
    res.send("request received");
})

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
