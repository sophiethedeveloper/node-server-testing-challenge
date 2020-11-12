const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const Cars = require("./cars/carsModel");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/cars", (req, res) => {
  Cars.getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = server;
