const PaymentAbstract = require("./PaymentAbstract");

class DebitCardPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado com cartão de débito.", "R$", this.value);
  }
}

module.exports = DebitCardPayment;
