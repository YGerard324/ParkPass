const express = require("express");
const ClientController = require ("../controller/ClientController");
const isAuth = require("../middleware/IsAuth");
const router = express.Router();

router.post("/" , isAuth, ClientController.add);
router.get("/", isAuth, ClientController.getAll);
router.get("/:id", isAuth, ClientController.getById);
router.put("/:id" , isAuth, ClientController.update);
router.delete("/:id" , isAuth, ClientController.delete);

module.exports = router;