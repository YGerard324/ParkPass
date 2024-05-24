const express = require("express");
const AdminController = require ("../controller/AdminController");
const isAuth = require("../middleware/IsAuth");
const router = express.Router();

router.post("/" ,  isAuth, AdminController.add);
router.get("/", isAuth, AdminController.getAll);
router.get("/:id", isAuth, AdminController.getById);
router.put("/:id" , isAuth, AdminController.update);
router.delete("/:id" , isAuth, AdminController.delete);

module.exports = router;