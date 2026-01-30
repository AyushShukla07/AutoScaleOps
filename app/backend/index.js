const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("AutoScaleOps backend is running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    service: "backend",
    timestamp: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
