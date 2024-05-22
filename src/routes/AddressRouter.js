const express = require("express");
const AddressController = require ("../controller/AddressController");
const router = express.Router();

router.post("/" , AddressController.add);
router.get("/", AddressController.getAll);
router.get("/:id", AddressController.getById);
router.put("/:id" , AddressController.update);
router.delete("/:id" , AddressController.delete);

module.exports = router;