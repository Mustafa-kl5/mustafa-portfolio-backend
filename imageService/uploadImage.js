const fs = require("fs");
const mongoose = require("mongoose");
const imageSchema = require("../model/image");
const imageModel = mongoose.model("images", imageSchema);

const uploadImage = async (images, Category) => {
  const Images = [];

  for (const image of images) {
    const match = /^data:image\/(\w+);/.exec(image);
    const imageType = match ? match[1] : null;
    const filename = `image${
      Math.floor(Math.random() * 900000) + 100000
    }.${imageType}`;
    const filepath = `Images/${Category}/${filename}`;
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

    try {
      await fs.promises.writeFile(filepath, base64Data, "base64");
      const imageURL = `https://mustafa-portfolio-wf6f.vercel.app/${filepath}`;
      const imagePost = new imageModel({
        fileName: imageURL,
      });
      await imagePost.save();
      Images.push(imagePost);
    } catch (error) {
      console.error(error);
    }
  }

  return Images;
};

module.exports = uploadImage;
