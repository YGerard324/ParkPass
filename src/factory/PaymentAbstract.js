class PaymentAbstract {
  constructor(value) {
    if (new.target === PaymentAbstract) {
      throw new Error(
        "Não é possível instanciar uma classe abstrata diretamente."
      );
    }
    this.value = value;
  }

  getPaid() {
    throw new Error(
      "Método abstrato deve ser implementado por uma classe derivada."
    );
  }
}

class CreditCardPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado com cartão de crédito.", "R$", this.value);
  }
}

class DebitCardPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado com cartão de débito.", "R$", this.value);
  }
}

class CashPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado em dinheiro.", "R$", this.value);
  }
}

class PixPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado via Pix.", "R$", this.value);
  }
}

class BankSlipPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado com boleto bancário.", "R$", this.value);
  }
}

class OtherPayment extends PaymentAbstract {
  constructor(value) {
    super(value);
  }
  getPaid() {
    console.log("Pagamento realizado com outro método.", "R$", this.value);
  }
}

module.exports = {
  CreditCardPayment,
  DebitCardPayment,
  CashPayment,
  PixPayment,
  BankSlipPayment,
  OtherPayment,
};
