const uploadImage = require("../../imageService/UpLoadSingleImage");
const Technology = require("../../model/technology");
const addTechnologyController = async (req, res) => {
  const {
    technologyName,
    proficiencyLevel,
    yearsOfExperience,
    technologyImage,
  } = req.body;
  try {
    const { userId } = req.user;
    const image = await uploadImage(technologyImage);
    const technology = await new Technology({
      technologyName,
      proficiencyLevel,
      yearsOfExperience,
      technologyImage: image,
      author: userId,
    });
    await technology.save();
    res.status(201).json({ message: "Your technology has added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = addTechnologyController;
