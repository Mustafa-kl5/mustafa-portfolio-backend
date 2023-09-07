const Technology = require("../../model/technology");

const deleteTechnologyController = async (req, res) => {
  const technologyId = req.params.technologyId.replace(/:/g, "");
  try {
    const technology = await Technology.findByIdAndDelete(technologyId);
    res
      .status(200)
      .json({ message: `${technology.technologyName} has been deleted.` });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = deleteTechnologyController;
