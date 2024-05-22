const express = require("express");
const AdminController = require ("../controller/AdminController");
const router = express.Router();

router.post("/" , AdminController.add);
router.get("/", AdminController.getAll);
router.get("/:id", AdminController.getById);
router.put("/:id" , AdminController.update);
router.delete("/:id" , AdminController.delete);

module.exports = router;