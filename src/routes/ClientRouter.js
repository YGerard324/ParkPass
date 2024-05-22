const express = require("express");
const ClientController = require ("../controller/ClientController");
const router = express.Router();

router.post("/" , ClientController.add);
router.get("/", ClientController.getAll);
router.get("/:id", ClientController.getById);
router.put("/:id" , ClientController.update);
router.delete("/:id" , ClientController.delete);

module.exports = router;