const express = require("express");
const ctrl = require("../../controllers/shop-controllers");

const { validateBody } = require("../../utils");
const { isValidId, authentivate } = require("../../midlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

//router.get("/", authentivate, ctrl.getAllContacts);

router.get("/:category", ctrl.getCategory);

// router.post(
//   "/",
//   authentivate,
//   validateBody(schemas.addSchema),
//   ctrl.addContact
// );

// router.delete("/:contactId", authentivate, isValidId, ctrl.deleteContactById);

// router.put(
//   "/:contactId",
//   authentivate,
//   isValidId,
//   validateBody(schemas.addSchema),
//   ctrl.updateContactById
// );

// router.patch(
//   "/:contactId/favorite",
//   authentivate,
//   isValidId,
//   validateBody(schemas.updateFavoriteSchema),
//   ctrl.updateFavoriteById
// );

module.exports = router;
