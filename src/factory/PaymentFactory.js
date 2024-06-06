const PaymentTypeRepository = require("../repository/PaymentTypeRepository");
const {
  CreditCardPayment,
  DebitCardPayment,
  CashPayment,
  PixPayment,
  BankSlipPayment,
  OtherPayment,
} = require("./PaymentTypeAbstract");

const paymentType = new PaymentTypeRepository();

class PaymentFactory {
  constructor(payment) {
    this.value = payment.price.value;
    this.payment_type = payment.payment_type.type;
    this.register = payment.register;
  }

  async createPayment() {
    if (
      this.value === null ||
      this.payment_type === null ||
      this.register === null
    ) {
      throw new Error("Não foi possível criar o pagamento");
    }

    const paymentTypes = await paymentType.getAll();
    const validPaymentType = paymentTypes.find(
      (pt) => pt.type === this.payment_type
    );

    if (!validPaymentType) {
      throw new Error("Tipo de pagamento desconhecido");
    }

    switch (this.payment_type) {
      case "CreditCard":
        return new CreditCardPayment(this.value, this.register);
      case "DebitCard":
        return new DebitCardPayment(this.value, this.register);
      case "Cash":
        return new CashPayment(this.value, this.register);
      case "Pix":
        return new PixPayment(this.value, this.register);
      case "BankSlip":
        return new BankSlipPayment(this.value, this.register);
      case "Other":
        return new OtherPayment(this.value, this.register);
      default:
        throw new Error("Tipo de pagamento desconhecido");
    }
  }
}

module.exports = PaymentFactory;
