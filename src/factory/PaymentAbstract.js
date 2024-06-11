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

module.exports = PaymentAbstract;

