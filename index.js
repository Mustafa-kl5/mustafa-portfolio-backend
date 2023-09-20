const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const run = require("./dbConnection");
const loginRouter = require("./routes/loginRoute");
const registrationRoute = require("./routes/registrationRoute");
const homeRoute = require("./routes/homeDataRoute");
const projectRouter = require("./routes/projectRoute");
const technologyRoutes = require("./routes/technologyRoute");
const contactRoute = require("./routes/contactInformationRoute");
const portfolioRoute = require("./routes/portfolioRoute");
const FeedBackRoute = require("./routes/feedBackRoute");

app.use(
  cors({
    origin: [
      "https://mustafa-portfolio-admin-panel.vercel.app",
      "https://mustafa-portfolio-iota.vercel.app",
      "http://localhost:3001",
      "http://localhost:3000",
    ],
  })
);

run.main().catch(console.error);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/Images", express.static("Images"));
app.use("/auth", loginRouter);
app.use("/auth", registrationRoute);
app.use("/home", homeRoute);
app.use("/project", projectRouter);
app.use("/technology", technologyRoutes);
app.use("/contact", contactRoute);
app.use("/feedBack", FeedBackRoute);
app.use("/api/v1/data", portfolioRoute);
const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT));
