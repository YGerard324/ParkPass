class IProductRepository {
    constructor() {
        if (new.target === IProductRepository) {
            throw new Error("A interface IProdutoRepository não pode ser instanciada.");
        }
    }

    async addProduct(product) {
        throw new Error("Esse método não pode ser chamado")
    }

    async getProduct(code){
        throw new Error("Esse método não pode ser chamado")
    }

    async getAllProducts(){
        throw new Error("Esse método não pode ser chamado")
    };
}

module.exports = IProductRepository;