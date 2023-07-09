const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const matchRoute = require("./routes/matchRoute");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "There is nothing to show!",
  });
});

app.use("/matches/", matchRoute);

module.exports = app;
