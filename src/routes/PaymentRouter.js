const express = require("express");
const PaymentController = require ("../controller/PaymentController");
const router = express.Router();

router.post("/" , PaymentController.add);
router.get("/", PaymentController.getAll);
router.get("/:id", PaymentController.getById);
router.put("/:id" , PaymentController.update);
router.delete("/:id" , PaymentController.delete);

module.exports = router;