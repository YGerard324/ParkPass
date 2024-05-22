const express = require("express");
const PaymentTypeController = require ("../controller/PaymentTypeController");
const router = express.Router();

router.post("/" , PaymentTypeController.add);
router.get("/", PaymentTypeController.getAll);
router.get("/:id", PaymentTypeController.getById);
router.put("/:id" , PaymentTypeController.update);
router.delete("/:id" , PaymentTypeController.delete);

module.exports = router;