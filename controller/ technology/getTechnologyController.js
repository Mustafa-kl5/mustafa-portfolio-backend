const Technology = require("../../model/technology");

const getTechnologyController = async (req, res) => {
  const { userId } = req.user;

  try {
    const technology = await Technology.find({ author: userId });
    res.status(200).json({ technology });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = getTechnologyController;
