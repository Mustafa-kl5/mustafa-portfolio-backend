const express = require("express");
const validationMiddleware = require("../validation/validationMiddleware");
const { authorization } = require("../Utils/jwtUtils");
const addTechnologyController = require("../controller/ technology/addTechnologyController");
const technologySchema = require("../validationSchema/technologySchema");
const deleteTechnologyController = require("../controller/ technology/deleteTechnologyController");
const getTechnologyController = require("../controller/ technology/getTechnologyController");
const technologyRoutes = express.Router();
technologyRoutes.post(
  "/addTechnology",
  validationMiddleware(technologySchema),
  authorization,
  addTechnologyController
);
technologyRoutes.get("/getTechnology", authorization, getTechnologyController);
technologyRoutes.delete(
  "/deleteTechnology/:technologyId",
  authorization,
  deleteTechnologyController
);
module.exports = technologyRoutes;
