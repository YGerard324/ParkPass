const PaymentAbstract = require("./PaymentAbstract");

class CashPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado em dinheiro.", "R$", this.value);
  }
}

module.exports = CashPayment;
