const PaymentAbstract = require("./PaymentAbstract");

class BankSlipPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado com boleto bancário.", "R$", this.value);
  }
}

module.exports = BankSlipPayment;
