const CashPayment = require("./CashPayment");
const CreditCardPayment = require("./CreditCardPayment");
const BankSlipPayment = require("./BankSlipPayment");
const PixPayment = require("./PixPayment");
const DebitCardPayment = require("./DebitCardPayment");
const OtherPayment = require("./OtherPayment");
class PaymentFactory {
  constructor(payment_type, value) {
    this.value = value;
    this.payment_type = payment_type;
  }

  async createPayment() {
    if (this.value === null || this.payment_type.id === null) {
      throw new Error("Não foi possível criar o pagamento");
    } else {
      switch (this.payment_type.id) {
        case 1:
          return new CashPayment(this.value).getPaid();
          break;
        case 2:
          return new CreditCardPayment(this.value).getPaid();
          break;
        case 3:
          return new BankSlipPayment(this.value).getPaid();
          break;
        case 4:
          return new PixPayment(this.value).getPaid();
          break;
        case 5:
          return new DebitCardPayment(this.value).getPaid();
          break;
        case 6:
          return new OtherPayment(this.value);
          break;
        default:
          throw new Error("Tipo de pagamento não encontrado");
      }
    }
  }
}

module.exports = PaymentFactory;
