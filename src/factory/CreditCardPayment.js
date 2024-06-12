const PaymentAbstract = require("./PaymentAbstract");

class CreditCardPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado com cartão de crédito.", "R$", this.value);
  }
}

module.exports = CreditCardPayment;
