const express = require("express");
const ParkingSpaceController = require ("../controller/ParkingSpaceController");
const router = express.Router();

router.post("/" , ParkingSpaceController.add);
router.get("/", ParkingSpaceController.getAll);
router.get("/:id", ParkingSpaceController.getById);
router.put("/:id" , ParkingSpaceController.update);
router.delete("/:id" , ParkingSpaceController.delete);

module.exports = router;