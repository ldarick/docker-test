"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv/config");

const app = express();

const index = require("./routes/");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json({ limit: process.env.REQUEST_LIMIT }));
app.use(express.urlencoded({ limit: process.env.REQUEST_LIMIT, extended: false }));

app.use("/", index);

module.exports = app;
