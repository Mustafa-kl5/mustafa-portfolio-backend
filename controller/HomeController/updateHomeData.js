const HomeData = require("../../model/homePageData");
const updateHomeData = async (req, res) => {
  try {
    const { userId } = req.user;
    const { name, description, cvLink, githubUrl } = req.body;
    const userData = await HomeData.findOne({ author: userId });
    userData.name = name;
    userData.description = description;
    userData.cvLink = cvLink;
    userData.gitHubProfile = githubUrl;
    await userData.save();
    res.status(201).json({ message: "Your data has updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = updateHomeData;
