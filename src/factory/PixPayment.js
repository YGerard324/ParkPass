const PaymentAbstract = require("./PaymentAbstract");

class PixPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado via Pix.", "R$", this.value);
  }
}

module.exports = PixPayment;
