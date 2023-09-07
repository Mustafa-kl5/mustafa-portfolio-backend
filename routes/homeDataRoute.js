const express = require("express");
const validationMiddleware = require("../validation/validationMiddleware");
const homeDataSchema = require("../validationSchema/homeDataSchema");
const { authorization } = require("../Utils/jwtUtils");
const updateHomeData = require("../controller/HomeController/updateHomeData");
const getHomeData = require("../controller/HomeController/getHomeData");
const homeRoute = express.Router();
homeRoute.post(
  "/updateHome",
  validationMiddleware(homeDataSchema),
  authorization,
  updateHomeData
);
homeRoute.get("/getHome", authorization, getHomeData);
module.exports = homeRoute;
