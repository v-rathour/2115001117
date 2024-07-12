const express = require("express");
const productRoutes = require("./api/prodcuct");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173/" }));

app.use(productRoutes);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
