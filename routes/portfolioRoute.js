const express = require("express");
const portfolioGetHomeData = require("../controller/HomeController/portfolioGetHomeData");
const portfolioGetContactData = require("../controller/ContactController/portfolioGetContactData");
const portfolioGetProjectData = require("../controller/ProjectController/portfolioGetProjectData");
const portfolioGetTechnologyData = require("../controller/ technology/portfolioGetTechnologyData");
const validationMiddleware = require("../validation/validationMiddleware");
const addFeedBackController = require("../controller/FeedBack/addFeedBackController");
const portfolioGetFeedBackData = require("../controller/FeedBack/portfolioGetFeedBackData");
const feedBackSchema = require("../validationSchema/feedBackSchema");
const generateEmail = require("../controller/FeedBack/generateEmail");
const portfolioRoute = express.Router();
portfolioRoute.get("/getHomeData/:userId", portfolioGetHomeData);
portfolioRoute.get("/getContactData/:userId", portfolioGetContactData);
portfolioRoute.get("/getProjectData/:userId", portfolioGetProjectData);
portfolioRoute.get("/getTechnologyData/:userId", portfolioGetTechnologyData);
portfolioRoute.get("/getFeedBackData/:userId", portfolioGetFeedBackData);
portfolioRoute.post(
  "/addFeedBack/:userId",
  validationMiddleware(feedBackSchema),
  generateEmail,
  addFeedBackController
);

module.exports = portfolioRoute;
