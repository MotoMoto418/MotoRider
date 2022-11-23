const express = require("express");
const mongoose = require("mongoose");
const Model = require("./mongo");
const bodyParser = require("body-parser");
const cors = require("cors");

const Bike = Model.Bike;
const User = Model.User;

// Connect to MongoDB
try {
  mongoose.connect(
    "mongodb://127.0.0.1:27017/MotoRider",
    () => {
      console.log("Connected");
    },
    (e) => console.error(e)
  );
} catch {
  mongoose.connect(
    "mongodb://localhost:27017/MotoRider",
    () => {
      console.log("Connected");
    },
    (e) => console.error(e)
  );
}

// Initialize Express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Signup Page
const validator = (req, res, next) => {
  console.log(req.body.emailID);
  const e = req.body.emailID;
  const exists = User.exists({ email: e }, (err, doc) => {
    if (!doc) {
      User.insertMany([
        {
          username: req.body.userName,
          email: req.body.emailID,
          password: req.body.pword,
        },
      ]);
    }

    console.log({ isUser: doc ? true : false });
    res.json({ isUser: doc ? true : false });
  });

  next();
};

app.post("/signup", validator, (req, res) => {
  console.log(req.body);
  // res.send("post request received");
});

// Home Page
const getData = (req, res, next) => {
  async () => {
    var data = await Bike.find({});
    console.log(data);
  };
  // const bikes = Bike.find({});
  // console.log(bikes);
  res.json(data);
  next();
};

app.get("/home", (req, res) => {
  console.log("get");
});

// Listener
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
