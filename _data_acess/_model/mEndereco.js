class Product {
    constructor(code, name, value) {
      this.code = code;
      this.name = name;
      this.value = value;
    }
  
    getPrecoTotalQuantidade(quantity) {
      return this.value * quantity;
    }
  
    setDesconto(discount) {
      return this.value * 0.10;
    }
  }
  
  module.exports = Product;
  