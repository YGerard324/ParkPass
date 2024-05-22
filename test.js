const AdminRepository = require("./src/repository/AdminRepository");
const ClientRepository = require("./src/repository/ClientRepository");
const AddressRepository = require("./src/repository/AddressRepository");
const ParkingRepository = require("./src/repository/ParkingRepository");
const PaymentRepository = require("./src/repository/PaymentRepository");
const RegisterRepository = require("./src/repository/RegisterRepository");
const PaymentTypeRepository = require("./src/repository/PaymentTypeRepository");
const ParkingSpaceRepository = require("./src/repository/ParkingSpaceRepository");
const { faker } = require('@faker-js/faker');
class App {
    constructor() {
    }

    async init() {

        try {

            let adminRepository = new AdminRepository();

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

            let clientRepository = new ClientRepository();
            
            for (let i = 1; i <= 10; i++) {
            const tipo = Math.random() < 0.5 ? cpf : cnpj;

                let client = {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                document: faker.number.int(),
                document_type: tipo,
                phone: faker.phone.number()
                };
                await clientRepository.add(client);
            }

        } catch (error) {
            console.error("Erro na inicialização do Client", error);
        }
        try {
            let addressRepository = new AddressRepository();
                for (let i = 1; i <= 10; i++) {
                    let address = {
                        public_place: faker.location.streetAddress({ useFullAddress: true }),
                        neighborhood: faker.location.state(),
                        city: faker.location.city(),
                        zip_code: faker.location.zipCode(),
                        client_id: faker.number.int({ min: 1, max: 10 })
                };
                await addressRepository.add(address);   
            }
     } catch (error) {
            console.error("Erro na inicialização do Endereço", error);
        }

        try {
            let parkingRepository = new ParkingRepository();
             for (let i = 1; i <= 10; i++) {
                let parking = {
                name: faker.company.name(),
                cnpj: faker.number.int(),
                public_place: faker.location.streetAddress({ useFullAddress: true }),
                neighborhood: faker.location.state(),
                city: faker.location.city(),
                zip_code: faker.location.zipCode(),
                admin_id: faker.number.int({ min: 1, max: 10 })
                };
                await parkingRepository.add(parking);
            }
            
        } catch (error) {
            console.error("Erro na inicialização do Parking", error);
        }

        try {
            let parkingSpaceRepository = new ParkingSpaceRepository();
             for (let i = 1; i <= 10; i++) {
                let parkingSpace = {
                vacancy_type: faker.datatype.boolean({ probability: 0.5 }) ? 'MOTO' : 'CARRO',
                roof: faker.datatype.boolean({ probability: 0.5 }),
                parking_id: faker.number.int({ min: 1, max: 10 })
                };
                await parkingSpaceRepository.add(parkingSpace);
            }

        } catch (error) {
            console.error("Erro na inicialização da Vaga", error);
        }

        try {
            let paymentTypeRepository = new PaymentTypeRepository();

            const payments = ['DINHEIRO', 'CARTAO DE CREDITO', 'BOLETO', 'PIX', 'CARTAO DE DEBITO', 'OUTROS'];
            for (let type of payments) {
                let paymentType = {
                    payment: type,
                };
                await paymentTypeRepository.add(paymentType);
            }
  

        } catch (error) {
            console.error("Erro na inicialização do TipoPagamento", error);
        }

        try {
            let paymentRepository = new PaymentRepository();
             for (let i = 1; i <= 10; i++) {
                let payment = {
                value: faker.number.float({ min: 1, max: 10, multipleOf: 0.01 }),
                payment_type_id: 1,
                register_id: i
                };
                await PaymentRepository.add(payment);
            }

        } catch (error) {
            console.error("Erro na inicialização do Payment", error);
        }


        try {
            let registerRepository = new RegisterRepository();
             for (let i = 1; i <= 10; i++) {
                let register = {
                entry: faker.date.between({ from: '2024-05-15T00:00:00.000Z', to: '2024-05-15T00:23:59.000Z' }),
                exit: faker.date.between({ from: '2024-05-15T00:00:00.000Z', to: '2024-05-15T00:23:59.000Z' }),
                parking_space_id: faker.number.int({ min: 1, max: 10 }),
                client_id: faker.number.int({ min: 1, max: 10 }),
                payment_id: faker.number.int({ min: 1, max: 10 }),
            };
                await registerRepository.add(register);
            }

        } catch (error) {
            console.error("Erro na inicialização do Registro", error);
        }

    }
}

const app = new App();
app.init();

















