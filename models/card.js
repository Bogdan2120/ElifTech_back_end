const { Schema, model } = require("mongoose");

const Joi = require("joi");

const handelMangoosError = require("../utils/handelMongoosError");

const emailRedex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const cardSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      match: emailRedex,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    adress: {
      type: String,
      required: [true, "Adress is required"],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    foods: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true }
);

cardSchema.post("save", handelMangoosError);

const cardFormSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" is required`,
  }),
  email: Joi.string().pattern(emailRedex).required().messages({
    "any.required": `"email" is required`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `"numder" is required`,
  }),
  adress: Joi.string().required().messages({
    "any.required": `"adress" is required`,
  }),
  totalPrice: Joi.number().required().messages({
    "any.required": `"price" is required`,
  }),
  foods: Joi.array(),
});

const schemas = {
  cardFormSchema,
};

const Card = model("card", cardSchema);

module.exports = {
  Card,
  schemas,
};
