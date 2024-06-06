class PaymentAbstract {
  constructor(value, register) {
    if (new.target === PaymentAbstract) {
      throw new Error(
        "Não é possível instanciar uma classe abstrata diretamente."
      );
    }
    this.value = value;
    this.register = register;
  }

  getPaid() {
    throw new Error(
      "Método abstrato deve ser implementado por uma classe derivada."
    );
  }
}

class CreditCardPayment extends PaymentAbstract {
  getPaid() {
    console.log("Pagamento realizado com cartão de crédito.");
  }
}

class DebitCardPayment extends PaymentAbstract {
  getPaid() {
    console.log("Pagamento realizado com cartão de débito.");
  }
}

class CashPayment extends PaymentAbstract {
  getPaid() {
    console.log("Pagamento realizado em dinheiro.");
  }
}

class PixPayment extends PaymentAbstract {
  getPaid() {
    console.log("Pagamento realizado via Pix.");
  }
}

class BankSlipPayment extends PaymentAbstract {
  getPaid() {
    console.log("Pagamento realizado com boleto bancário.");
  }
}

class OtherPayment extends PaymentAbstract {
  getPaid() {
    console.log("Pagamento realizado com outro método.");
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
