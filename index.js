const express = require("express");

const app = express();

const check = true;

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/greeting/:name", (req, res) => {
  let name = req.params.name;
  res.render("Greeting", { Name: name });
});

app.listen("3000", (req, res) => {
  console.log("Listening on port 3000");
});
