const AdminRepository = require("./src/repository/AdminRepository");
const ClienteRepository = require("./src/repository/ClienteRepository");
const EnderecoRepository = require("./src/repository/EnderecoRepository");
const EstacionamentoRepository = require("./src/repository/EstacionamentoRepository");
const PagamentoRepository = require("./src/repository/PagamentoRepository");
const RegistroRepository = require("./src/repository/RegistroRepository");
const TipoPagamentoRepository = require("./src/repository/TipoPagamentoRepository");
const VagaRepository = require("./src/repository/VagaRepository");
const { faker } = require('@faker-js/faker');
class App {
    constructor() {
    }

    async init() {

        try {

            let adminRepository = new AdminRepository();
            // let registroRepository = new RegistroRepository();
            // let tipoPagamentoRepository = new TipoPagamentoRepository();
            // let vagaRepository = new VagaRepository();

            for (let i = 1; i <= 10; i++) {

                let admin = {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password()
                };
                await adminRepository.add(admin);
            }

        } catch (error) {
            console.error("Erro na inicialização do Admin", error);
        }

        try {
            let cpf = "CPF";
            let cnpj = "CNPJ";

            let clienteRepository = new ClienteRepository();
            
            for (let i = 1; i <= 10; i++) {
            const tipo = Math.random() < 0.5 ? cpf : cnpj;

                let cliente = {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                documento: faker.number.int(),
                tipoDocumento: tipo,
                telefone: faker.phone.number()
                };
                await clienteRepository.add(cliente);
            }

        } catch (error) {
            console.error("Erro na inicialização do Cliente", error);
        }
        try {
            let enderecoRepository = new EnderecoRepository();

                let endereco = {
                    logradouro: faker.location.streetAddress({ useFullAddress: true }),
                    bairro: faker.location.state(),
                    cidade: faker.location.city(),
                    cep: faker.location.zipCode(),
                    cliente_id: 1
                };
                await enderecoRepository.add(endereco);     

        } catch (error) {
            console.error("Erro na inicialização do Endereço", error);
        }

        try {

            let estacionamentoRepository = new EstacionamentoRepository();

                let estacionamento = {
                name: faker.company.name(),
                cnpj: faker.number.int(),
                logradouro: faker.location.streetAddress({ useFullAddress: true }),
                bairro: faker.location.state(),
                cidade: faker.location.city(),
                cep: faker.location.zipCode(),
                admin_id: 1
                };
                await estacionamentoRepository.add(estacionamento);

        } catch (error) {
            console.error("Erro na inicialização do Cliente", error);
        }

    }
}

const app = new App();
app.init();

















