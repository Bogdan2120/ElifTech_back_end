const { Schema, model } = require("mongoose");

// const Joi = require("joi");

const handelMangoosError = require("../utils/handelMongoosError");

const shopSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title must be exit"],
    },
    imageUrl: {
      type: String,
      required: [true, "imageUrl must be exit"],
    },
    category: {
      type: String,
      required: [true, "category must be exit"],
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

shopSchema.post("save", handelMangoosError);

// const schemas = {};

const Shop = model("shop", shopSchema);

module.exports = {
  Shop,
  // schemas,
};
