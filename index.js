const express = require("express");

const app = express();

const check = true;

const eightballresponses = require("./models/eightBallresponses");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/greeting/:name", (req, res) => {
  let name = req.params.name;
  res.render("Greeting", { Name: name });
});

app.get("/tip/:var1/:var2", (req, res) => {
  let var1 = req.params.var1;
  let var2 = req.params.var2 / 100;
  let result = var1 * var2;

  res.send(`The tip should be $${result}`);
});

app.get("/magic/:question", (req, res) => {
  let response =
    eightballresponses[
      Math.floor(Math.random(eightballresponses.length - 0) + 0)
    ];
  //let result = var1 * var2;

  res.render("Magic", {
    question: req.params.question,
    result: response,
  });
});

app.listen("3000", (req, res) => {
  console.log("Listening on port 3000");
});
