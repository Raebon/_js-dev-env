import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static("dist"));
app.use(compression());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/users", function (req, res) {
  //hard coding for simplicity. Pretend this hits a real database
  res.json([
    { id: 1, firstName: "Bob", lastName: "Smith", email: "smith@gmail.com" },
    { id: 2, firstName: "Leo", lastName: "Oneil", email: "leo@gmail.com" },
    { id: 3, firstName: "Moorn", lastName: "Mocka", email: "moord@gmail.com" },
    { id: 4, firstName: "Faer", lastName: "Nic", email: "nic@gmail.com" },
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
