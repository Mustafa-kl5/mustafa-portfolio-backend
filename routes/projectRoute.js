const express = require("express");
const validationMiddleware = require("../validation/validationMiddleware");
const { authorization } = require("../Utils/jwtUtils");
const addProjectController = require("../controller/ProjectController/addProjectController");
const projectSchema = require("../validationSchema/projectSchema");
const getProjectsController = require("../controller/ProjectController/getProjectsController");
const getProjectByIdController = require("../controller/ProjectController/getProjectByIdController");
const deleteProjectByIdController = require("../controller/ProjectController/deleteProjectController");
const updateProjectByIdController = require("../controller/ProjectController/updateProjectById");

const projectRouter = express.Router();
projectRouter.post(
  "/addProject",
  authorization,
  validationMiddleware(projectSchema),
  addProjectController
);
projectRouter.get("/getProjects", authorization, getProjectsController);
projectRouter.get(
  "/getProjectsById/:projectId",
  authorization,
  getProjectByIdController
);
projectRouter.delete(
  "/deleteProjectsById/:projectId",
  authorization,
  deleteProjectByIdController
);
projectRouter.post(
  "/updateProjectsById/:projectId",
  authorization,
  updateProjectByIdController
);
module.exports = projectRouter;
