const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/card-controllers");

const { validateBody } = require("../../utils");
const { schemas } = require("../../models/card");

router.post("/", validateBody(schemas.cardFormSchema), ctrl.makeOrder);
module.exports = router;
