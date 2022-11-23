const mongoose = require("mongoose");
const Model = require("./mongo");

const Bike = Model.Bike;
const User = Model.User;

try {
  mongoose.connect(
    "mongodb://127.0.0.1:27017/MotoRider",
    () => {
      console.log("Conncected");
    },
    (e) => console.error(e)
  );
} catch {
  mongoose.connect(
    "mongodb://localhost:27017/MotoRider",
    () => {
      console.log("Conncected");
    },
    (e) => console.error(e)
  );
}

const yamaha = new Bike({
  name: "Yamaha MT 15 V2",
  engineType: "Liquid cooled, 4-stroke, SOHC, 4-valve",
  peakPower: "18.4 PS @ 10000 rpm",
  transmission: "Manual",
  gearBox: "6 Speed",
  maxTorque: "14.1 Nm @ 7500 rpm",
});

const triumph = new Bike({
  name: "Triumph Thruxton RS",
  engineType: "Liquid-cooled, 8-valve, SOHC, 270° crank angle parallel-twin",
  peakPower: "103 HP (77 kW) @ 7,500 rpm",
  transmission: "Manual",
  gearBox: "6 Speed",
  maxTorque: "112 Nm @ 4,250 rpm",
});

var bikes = [
  new Bike({
    brand: "Triumph",
    model: "Thruxton RS",
    engineType: "Liquid-cooled, 8-valve, SOHC, 270° crank angle parallel-twin",
    peakPower: "103 HP (77 kW) @ 7,500 rpm",
    transmission: "Manual",
    gearBox: "6 Speed",
    maxTorque: "112 Nm @ 4,250 rpm",
    rate: 8400,
  }),

  new Bike({
    brand: "Honda",
    model: "CB650R",
    engineType: "inline four",
    peakPower: "50 bhp",
    transmission: "Manual",
    gearBox: "6-speed",
    maxTorque: "50 Nm",
    rate: 3000,
  }),

  new Bike({
    brand: "Kawasaki",
    model: "Z650",
    engineType: "inline four",
    peakPower: "40 bhp",
    transmission: "Manual",
    gearBox: "6-speed",
    maxTorque: "55 Nm",
    rate: 3500,
  }),

  new Bike({
    brand: "Ducati",
    model: "Panigale V4SP2",
    engineType: "V4",
    peakPower: "215 hp",
    transmission: "Manual",
    gearBox: "6 Speed",
    maxTorque: "150 Nm",
    rate: 10500,
  }),

  new Bike({brand: "Yamaha",
    model: "MT-09",
    engineType: "Parallel Twin",
    peakPower: "70 bhp",
    transmission: "Manual",
    gearBox: "6 Speed",
    maxTorque: "90 Nm",
    rate: 7000,}),

    new Bike({  brand: "Kawasaki",
        model: "z1000",
        engineType: "Inline 4",
        peakPower: "100 bhp",
        transmission: "Manual",
        gearBox: "6 Speed",
        maxTorque: "100 Nm",
        rate: 8000,}),

    new Bike({brand: "Triumph",
        model: "Trident",
        engineType: "Inline 3",
        peakPower: "60 bhp",
        transmission: "Manual",
        gearBox: "6 Speed",
        maxTorque: "80 Nm",
        rate: 9000,}),

    new Bike({brand: "Triumph",
        model: "Street Triple",
        engineType: "Inline 3",
        peakPower: "90 bhp",
        transmission: "Manual",
        gearBox: "6 Speed",
        maxTorque: "90 Nm",
        rate: 6000,})
];

bikes.forEach((bikess) => {
  Bike.exists({ rate: bikess.rate }, (err, doc) => {
    if (!doc) {
      Bike.insertMany([bikess], (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    }
  });
});
