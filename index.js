const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const run = require("./dbConnection");

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

run.main().catch(console.error);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/Images", express.static("Images"));
const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT));
