/* const express = require("express");
const app = express(); */
// const pool = require("./db");

import express from "express";
var app = express();

app.use(express.json()); // -> req.body
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

var server = app.listen(port, () => console.log("connected!" + port));
