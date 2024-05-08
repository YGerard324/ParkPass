// const AdminRepository = require("./repositories/AdminRepository");
const EstacionamentoRepository = require("./repositories/EstacionamentoRepository");

let estacionamentoRepository = new EstacionamentoRepository();
// let adminRepository = new AdminRepository();
// adminRepository.add({ name: "asd", email: "asd", password: "password" });
estacionamentoRepository.create({ name: "thigaspark", cnpj: "5135416345", logradouro:"213214", bairro: "dwadafw", cidade:"FSA", cep:"5165213" });

