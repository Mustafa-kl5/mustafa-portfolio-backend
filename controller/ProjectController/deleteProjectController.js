const Project = require("../../model/Projects");
const deleteProjectByIdController = async (req, res) => {
  const projectId = req.params.projectId.replace(/:/g, "");
  try {
    const project = await Project.findByIdAndDelete(projectId);
    res
      .status(200)
      .json({ message: `${project.projectName} has been deleted.` });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = deleteProjectByIdController;
