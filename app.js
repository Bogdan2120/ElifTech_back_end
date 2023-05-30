const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const shopRouter = require("./routes/api/shop-routes");
const cardRouter = require("./routes/api/card-routers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/shop", shopRouter);
app.use("/api/card", cardRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
