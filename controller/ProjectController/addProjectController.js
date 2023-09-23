const Project = require("../../model/Projects");
const uploadImage = require("../../imageService/uploadImage");
const addProjectController = async (req, res) => {
  const {
    projectName,
    projectDescription,
    projectLink,
    projectTechnology,
    projectImages,
    projectGithubRepo,
  } = req.body;
  try {
    const { userId } = req.user;
    const projectImage = await uploadImage(projectImages);
    const project = await new Project({
      projectName: projectName,
      description: projectDescription,
      projectLink: projectLink,
      images: projectImage,
      technologyUsed: projectTechnology,
      projectGithubRepo: projectGithubRepo,
      author: userId,
    });
    await project.save();
    res.status(201).json({ message: "Your project has added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = addProjectController;
