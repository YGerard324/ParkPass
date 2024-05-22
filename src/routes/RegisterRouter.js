const express = require("express");
const RegisterController = require ("../controller/RegisterController");
const router = express.Router();

router.post("/" , RegisterController.add);
router.get("/", RegisterController.getAll);
router.get("/:id", RegisterController.getById);
router.put("/:id" , RegisterController.update);
router.delete("/:id" , RegisterController.delete);

module.exports = router;