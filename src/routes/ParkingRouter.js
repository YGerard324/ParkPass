const express = require("express");
const ParkingController = require ("../controller/ParkingController");
const router = express.Router();

router.post("/" , ParkingController.add);
router.get("/", ParkingController.getAll);
router.get("/:id", ParkingController.getById);
router.put("/:id" , ParkingController.update);
router.delete("/:id" , ParkingController.delete);

module.exports = router;