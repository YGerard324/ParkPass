const ProductRepository = require('./_data_acess/productRepository');

async function testProductRepository() {
    const repository = new ProductRepository();

    try {
        const newProduct = await repository.addProduct('Coca', 4.5);
        console.log('Novo produto adicionado:', newProduct);

        // Obter um produto pelo código (exemplo: código 1)
        const product = await repository.getProduct(1);
        console.log('Produto encontrado:', product);
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chamando a função de teste
testProductRepository();
