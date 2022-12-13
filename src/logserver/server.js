const express = require("express");
const cors = require("cors");
const log = require("./log");

const PORT = 4300;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:4000",
      "http://localhost:4200",
      "http://localhost:5672",
    ],
    methods: "POST, GET",
  })
);

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {});

app.post("/log", (req, res) => {
  if (!req.body) return res.status(400).json({ error: "No Body Provided" });
  const message = req.body.message;
  if (!message) return res.status(400).json({ error: "No Message Provided" });
  console.log("Log Received");
  log(message);
  return res.sendStatus(200);
});

// Heart = Heartbeat & Log Server
app.listen(PORT, () => console.log(`Log Server running on port ${PORT}`));
