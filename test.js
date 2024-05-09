const AdminRepository = require("./src/repository/AdminRepository");
const EstacionamentoRepository = require("./src/repository/EstacionamentoRepository");

let estacionamentoRepository = new EstacionamentoRepository();
let adminRepository = new AdminRepository();
adminRepository.add({ name: "asd", email: "asd", password: "password" });
estacionamentoRepository.add({ name: "thigaspark", cnpj: "5135416345", logradouro:"213214", bairro: "dwadafw", cidade:"FSA", cep:"5165213", admin_id:1 });


