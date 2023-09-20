const fs = require("fs");

const upLoadSingleImage = async (image) => {
  const match = /^data:image\/(\w+);/.exec(image);
  const imageType = match ? match[1] : null;
  const filename = `image${
    Math.floor(Math.random() * 900000) + 100000
  }.${imageType}`;
  const filepath = `Images/techImage/${filename}`;
  const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

  try {
    await fs.promises.writeFile(filepath, base64Data, "base64");
    const imageURL = `https://mustafa-portfolio-wf6f.vercel.app/${filepath}`;
    console.log("hi");
    return imageURL;
  } catch (error) {
    throw error;
  }
};

module.exports = upLoadSingleImage;
