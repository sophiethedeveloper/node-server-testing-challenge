const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
