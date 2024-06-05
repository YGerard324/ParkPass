const express = require("express");
const UserController = require ("../controller/UserController");
const isAuth = require("../middleware/IsAuth");
const router = express.Router();

router.post("/" , isAuth, UserController.add);
router.get("/", isAuth, UserController.getAll);
router.get("/:id", isAuth, UserController.getById);
router.put("/:id" , isAuth, UserController.update);
router.delete("/:id" , isAuth, UserController.delete);

module.exports = router;