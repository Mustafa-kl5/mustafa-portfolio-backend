const express = require("express");
const getFeedBack = require("../controller/FeedBack/getFeedBack");
const { authorization } = require("../Utils/jwtUtils");
const deleteFeedBack = require("../controller/FeedBack/deleteFeedBack");
const FeedBackRoute = express.Router();
FeedBackRoute.get("/getFeedBack", authorization, getFeedBack);
FeedBackRoute.delete(
  "/deleteFeedBack/:feedBackId",
  authorization,
  deleteFeedBack
);

module.exports = FeedBackRoute;
