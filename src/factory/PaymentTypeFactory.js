class PaymentTypeFactory {
  create(type) {
    return type(type);
  }
}

module.exports =  PaymentTypeFactory;