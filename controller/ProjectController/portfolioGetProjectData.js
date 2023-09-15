const Project = require("../../model/Projects");
const portfolioGetProjectData = async (req, res) => {
  try {
    const userId = req.params.userId.replace(/:/g, "");
    const projects = await Project.find({ author: userId });
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = portfolioGetProjectData;
