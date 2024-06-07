const PaymentTypeRepository = require("../repository/PaymentTypeRepository");
const {
  CreditCardPayment,
  DebitCardPayment,
  CashPayment,
  PixPayment,
  BankSlipPayment,
  OtherPayment,
} = require("./PaymentAbstract");

const paymentType = new PaymentTypeRepository();

class PaymentFactory {
  constructor(type, value) {
    this.value = value;
    this.payment_type = type;
  }
  async createPayment() {
    if (this.value === null || this.payment_type === null) {
      throw new Error("Não foi possível criar o pagamento");
    }

    const paymentTypes = await paymentType.getAll();
    const validPaymentType = paymentTypes.find(
      (pt) => pt.payment === this.payment_type
    );

    if (!validPaymentType) {
      throw new Error("Nenhum pagamento informado!");
    } else {

    switch (this.payment_type) {
      case "CreditCard":
        return new CreditCardPayment(this.value).getPaid();
        break;
      case "DebitCard":
        return new DebitCardPayment(this.value).getPaid();
        break;
      case "Cash":
        return new CashPayment(this.value).getPaid();
        break;
      case "PIX":
        return new PixPayment(this.value).getPaid();
        break;
      case "BankSlip":
        return new BankSlipPayment(this.value).getPaid();
        break;
      case "Other":
        return new OtherPayment(this.value);
        break;
      default:
        throw new Error("Tipo de pagamento não encontrado");
    }
  }
  }
}

module.exports = PaymentFactory;
