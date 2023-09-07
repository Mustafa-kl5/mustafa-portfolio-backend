const Project = require("../../model/Projects");
const getProjectsController = async (req, res) => {
  try {
    const { userId } = req.user;
    const projects = await Project.find({ author: userId }).select(
      "projectName"
    );
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = getProjectsController;
