const fs = require("fs");

const uploadImage = async (images) => {
  const Images = [];

  for (const image of images) {
    const match = /^data:image\/(\w+);/.exec(image);
    const imageType = match ? match[1] : null;
    const filename = `image${
      Math.floor(Math.random() * 900000) + 100000
    }.${imageType}`;
    const filepath = `Images/${filename}`;
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

    try {
      await fs.promises.writeFile(filepath, base64Data, "base64");
      const imageURL = `https://portfoliosre.onrender.com/${filepath}`;
      Images.push(imageURL);
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  }

  return Images;
};

module.exports = uploadImage;
