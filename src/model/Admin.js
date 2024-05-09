class Admin {
    constructor(id, name, email, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    getPrecoTotalQuantidade(quantity){
      return this.value * quantity;
    }
  
    setDesconto(discount) {
      return this.value * 0.10;
    }
  }
  
  module.exports = Admin;
  