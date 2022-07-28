import express from "express";
import * as pg from "pg";
import pkg from "pg";
const { Pool } = "pkg";

const port = 6666;

var app = express();
const pool = new pg.default.Pool({
  user: "postgres",
  host: "localhost",
  database: "cookbook",
  password: "postgres",
  port: 5433,
});

const getFetch = () => {
  fetch("http://127.0.0.1:8080/")
    .then((res) => {
      // console.log(res);
      // console.log(data);
      return res.json();
    })
    .then((res) => {
      console.log(res.items);
      return res.items;
    });
};

let data = getFetch();
console.log(data);

// app.get("/", (req, res) => res.send("hallo world"));

app.get("/", (req, res) => {
  pool
    .query(`SELECT * FROM rezepte;`)
    .then((data) => res.json(data))
    .catch((e) => res.sendStatus(500));
});

// ein Rezept hinzufügen
/* app.post("/", (req, res) => {
  pool
    .query(`INSERT INTO rezepte (name, description, zutaten, type) VALUES ('','','');`)
    .then((data) => res.json(data))
    .catch((e) => res.sendStatus(500));
}); */

var server = app.listen(port, function () {
  console.log(`Server ist running and listening at port ${port}`);
});

// module.exports = pool;
