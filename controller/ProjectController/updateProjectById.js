const Project = require("../../model/Projects");
const updateProjectByIdController = async (req, res) => {
  const projectId = req.params.projectId.replace(/:/g, "");
  const { projectName, projectDescription, projectLink, technologyUsed } =
    req.body;
  try {
    const project = await Project.findById(projectId);
    project.projectName = projectName;
    project.description = projectDescription;
    project.projectLink = projectLink;
    project.technologyUsed = technologyUsed;
    await project.save();
    res.status(200).json({ project, message: "Project Updated Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = updateProjectByIdController;
