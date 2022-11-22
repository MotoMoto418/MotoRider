const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const bikeSchema = new mongoose.Schema({
  name: String,
  engineType: String,
  peakPower: String,
  transmission: String,
  gearBox: String,
  maxTorque: String,
});

module.exports = {
  Bike: mongoose.model("Bike", bikeSchema),
  User: mongoose.model("User", userSchema),
};
