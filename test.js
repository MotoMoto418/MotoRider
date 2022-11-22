const mongoose = require("mongoose")
const Model = require('./mongo')

const Bike = Model.Bike;
const User = Model.User

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

const yamaha = new Bike({
    name: "Yamaha MT 15 V2",
    engineType: "Liquid cooled, 4-stroke, SOHC, 4-valve",
    peakPower: "18.4 PS @ 10000 rpm",
    transmission: "Manual",
    gearBox: "6 Speed",
    maxTorque: "14.1 Nm @ 7500 rpm"
})

const triumph = new Bike({
    name: "Triumph Thruxton RS",
    engineType: "Liquid-cooled, 8-valve, SOHC, 270° crank angle parallel-twin",
    peakPower: "103 HP (77 kW) @ 7,500 rpm",
    transmission: "Manual",
    gearBox: "6 Speed",
    maxTorque: "112 Nm @ 4,250 rpm"
})

var bikes = [triumph, yamaha];
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