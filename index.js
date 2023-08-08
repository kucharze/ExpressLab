const express = require("express");

const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.listen("3000", (req, res) => {
  console.log("Listening on port 3000");
});
