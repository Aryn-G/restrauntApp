const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const tables = [];
const waitlist = [];

const menu = [
  {
    food: "pizza",
    price: 2.0,
  },
  {
    food: "fries",
    price: 0.5,
  },
  {
    food: "sprite",
    price: 0.5,
  },
  {
    food: "chips",
    price: 0.5,
  },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/order", function (req, res) {
  res.sendFile(path.join(__dirname, "order.html"));
});

app.get("/api/tables", function (req, res) {
  res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
  res.json(waitlist);
});

app.get("/api/menu", function (req, res) {
  res.json(waitlist);
});

app.get("/book", function (req, res) {
  res.sendFile(path.join(__dirname, "book.html"));
});

app.post("/api/tables", function (req, res) {
  var newTable = req.body;

  console.log(newTable);

  tables.push(newTable);

  res.json(newTable);
});

app.post("/api/waitlist", function (req, res) {
  var newWait = req.body;

  console.log(newWait);

  waitlist.push(newWait);

  res.json(newWait);
});

app.listen(PORT, () => console.log("Listening at http://localhost:" + PORT));
