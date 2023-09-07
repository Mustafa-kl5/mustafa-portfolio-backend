const Project = require("../../model/Projects");
const getProjectByIdController = async (req, res) => {
  const projectId = req.params.projectId.replace(/:/g, "");
  try {
    const project = await Project.findById(projectId);
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = getProjectByIdController;
