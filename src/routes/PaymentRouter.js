const express = require("express");
const PaymentController = require ("../controller/PaymentController");
const router = express.Router();


router.get("/registerPayment" , PaymentController.registerPayment);

router.get("/:id", PaymentController.getById);
router.put("/:id" , PaymentController.update);
router.delete("/:id" , PaymentController.delete);

router.post("/" , PaymentController.add);
router.get("/", PaymentController.getAll);


module.exports = router;