const express = require("express");
const UserController = require("../controller/UserController");
const isAuth = require("../middleware/IsAuth");
const router = express.Router();

router.post("/", UserController.add);
router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

module.exports = router;
