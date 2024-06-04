const PaymentTypeRepository = require("../repository/PaymentTypeRepository");
const paymentType = new PaymentTypeRepository();

class PaymentFactory {
  constructor(PaymentRepository) {
    this.PaymentRepository = PaymentRepository;
  }

  async createPayment(value, payment_type, register) {
    if (value === null || payment_type === null || register === null) {
      throw new Error("Não foi possível criar o pagamento");
    } else {
      const paymentTypes = await paymentType.getAll();
      const validPaymentType = paymentTypes.find(
        (pt) => pt.type === payment_type
      );

      if (!validPaymentType) {
        throw new Error("Tipo de pagamento desconhecido");
      }

      switch (payment_type) {
        case "CreditCard":
          return new CreditCardPayment(value, register);
        case "DebitCard":
          return new DebitCardPayment(value, register);
        case "Cash":
          return new CashPayment(value, register);
        case "Pix":
          return new PixPayment(value, register);
        case "BankSlip":
          return new BankSlipPayment(value, register);
        case "Other":
          return new OtherPayment(value, register);
        default:
          throw new Error("Tipo de pagamento desconhecido");
      }
    }
  }
}

module.exports = PaymentFactory;
