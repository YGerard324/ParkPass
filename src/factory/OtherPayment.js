const PaymentAbstract = require("./PaymentAbstract");

class OtherPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado com outro método.", "R$", this.value);
  }
}
module.exports = OtherPayment;
