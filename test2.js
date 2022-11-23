const mongoose = require("mongoose")
const Model = require('./mongo')

const Bike = Model.Bike;

try {
    mongoose.connect("mongodb://127.0.0.1:27017/MotoRider", () => {
        console.log("Conncected")
    }, e => console.error(e))
}

catch {
    mongoose.connect("mongodb://localhost:27017/MotoRider", () => {
        console.log("Conncected")
    }, e => console.error(e))
}

var bikes = [];
bikes.forEach((bikess) => {
    Bike.exists({ name: bikess.name }, (err, doc) => {
        if (!doc) {
            Bike.insertMany([bikess], (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("success");
                }
            })
        }
    })
})