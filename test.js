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
                for (let i = 1; i <= 10; i++) {
                    let endereco = {
                        logradouro: faker.location.streetAddress({ useFullAddress: true }),
                        bairro: faker.location.state(),
                        cidade: faker.location.city(),
                        cep: faker.location.zipCode(),
                        cliente_id: faker.number.int({ min: 1, max: 10 })
                };
                await enderecoRepository.add(endereco);   
            }
     } catch (error) {
            console.error("Erro na inicialização do Endereço", error);
        }

        try {
            let estacionamentoRepository = new EstacionamentoRepository();
             for (let i = 1; i <= 10; i++) {
                let estacionamento = {
                name: faker.company.name(),
                cnpj: faker.number.int(),
                logradouro: faker.location.streetAddress({ useFullAddress: true }),
                bairro: faker.location.state(),
                cidade: faker.location.city(),
                cep: faker.location.zipCode(),
                admin_id: faker.number.int({ min: 1, max: 10 })
                };
                await estacionamentoRepository.add(estacionamento);
            }
            
        } catch (error) {
            console.error("Erro na inicialização do Estacionamento", error);
        }

        try {
            let vagaRepository = new VagaRepository();
             for (let i = 1; i <= 10; i++) {
                let vaga = {
                tipoVaga: faker.datatype.boolean({ probability: 0.5 }) ? 'MOTO' : 'CARRO',
                cobertura: faker.datatype.boolean({ probability: 0.5 }),
                estacionamento_id: faker.number.int({ min: 1, max: 10 })
                };
                await vagaRepository.add(vaga);
            }

        } catch (error) {
            console.error("Erro na inicialização da Vaga", error);
        }

        try {
            let tipoPagamentoRepository = new TipoPagamentoRepository();

            const formasPagamento = ['DINHEIRO', 'CARTAO DE CREDITO', 'BOLETO', 'PIX', 'CARTAO DE DEBITO', 'OUTROS'];
            for (let forma of formasPagamento) {
                let tipoPagamento = {
                    forma_pagamento: forma,
                };
                await tipoPagamentoRepository.add(tipoPagamento);
            }
  

        } catch (error) {
            console.error("Erro na inicialização do TipoPagamento", error);
        }

        try {
            let pagamentoRepository = new PagamentoRepository();
             for (let i = 1; i <= 10; i++) {
                let pagamento = {
                valor: faker.number.float({ min: 1, max: 10, multipleOf: 0.01 }),
                tipoPagamento_id: 1,
                registro_id: i
                };
                await pagamentoRepository.add(pagamento);
            }

        } catch (error) {
            console.error("Erro na inicialização do Pagamento", error);
        }


        try {
            let registroRepository = new RegistroRepository();
             for (let i = 1; i <= 10; i++) {
                let registro = {
                entrada: faker.date.between({ from: '2024-05-15T00:00:00.000Z', to: '2024-05-15T00:23:59.000Z' }),
                saida: faker.date.between({ from: '2024-05-15T00:00:00.000Z', to: '2024-05-15T00:23:59.000Z' }),
                vaga_id: faker.number.int({ min: 1, max: 10 }),
                cliente_id: faker.number.int({ min: 1, max: 10 }),
                pagamento_id: faker.number.int({ min: 1, max: 10 }),
            };
                await registroRepository.add(registro);
            }

        } catch (error) {
            console.error("Erro na inicialização do Registro", error);
        }

    }
}

const app = new App();
app.init();

















