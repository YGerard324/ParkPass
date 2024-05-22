// const express = require("express");
// const app = express();
// const port = 3000;
// app.use(express.json());

// // Admin routes <-- OK
// const AdminRepository = require("./src/repository/AdminRepository");
// const AdminApplication = require("./src/application/AdminApplication");
// const AdminInterface = require("./src/facade/AdminInterface");

// const adminRepository = new AdminRepository();
// const adminApplication = new AdminApplication(adminRepository);
// const adminInterface = new AdminInterface(adminApplication);

// app.get("/admin", async (req, res) => {
//   try {
//     const admin = await adminInterface.getAll();
//     res.status(200).send(admin);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter admin" });
//   }
// });

// app.get("/admin/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const row = await adminInterface.getById(id);
//     if (!row) {
//       return res.status(404).json({ error: "Admin não encontrado" });
//     }
//     res.status(200).json(row);
//   } catch (error) {
//     res.status(500).json({ error: "Erro interno ao buscar o admin" });
//   }
// });

// app.put("/admin/:id", async (req, res) => {
//   try {
//     const updatedAdmin = await adminInterface.update(req);
//     res.status(200).json({ message: "Admin atualizado com sucesso!", data: updatedAdmin });
//   } catch (error) {
//     console.error("Erro ao atualizar admin:", error);
//     res.status(500).json({ error: "Erro interno ao atualizar admin" });
//   }
// });

// app.put("/admin", async (req, res) => {
//   try {
//     await adminInterface.update(req.body);
//     res.status(200).json({ error: "Admin atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter admin" });
//   }
// });

// app.delete("/admin", async (req, res) => {
//   try {
//     await adminInterface.delete(req.body);
//     res.status(200).json({ error: "Admin atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter admin" });
//   }
// });

// app.post("/admin", async (req, res) => {
//   try {
//     const result = await adminInterface.add(req.body);
//     res.status(200).json({ error: "Admin atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao criar o admin" });
//   }
// });
// // Admin routes

// // Cliente routes <-- OK

// const ClienteRepository = require("./src/repository/ClienteRepository");
// const ClienteApplication = require("./src/application/ClienteApplication");
// const ClienteInterface = require("./src/facade/ClienteInterface");

// const clienteRepository = new ClienteRepository();
// const clienteApplication = new ClienteApplication(clienteRepository);
// const clienteInterface = new ClienteInterface(clienteApplication);

// app.get("/cliente", async (req, res) => {
//   try {
//     const cliente = await clienteInterface.getAll();
//     res.status(200).send(cliente);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter cliente" });
//   }
// });

// app.get("/cliente/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const row = await clienteInterface.getById(id);
//     if (!row) {
//       return res.status(404).json({ error: "Cliente não encontrado" });
//     }
//     res.status(200).json(row);
//   } catch (error) {
//     res.status(500).json({ error: "Erro interno ao buscar o cliente" });
//   }
// });

// app.put("/cliente/:id", async (req, res) => {
//   try {
//     const row = await clienteInterface.update(req);
//     res.status(200).json({ error: "Cliente atualizado com sucesso!" });
//   } catch (error) {
//     console.error("Erro ao obter cliente por ID:", error);
//     res.status(500).json({ error: "Erro interno ao buscar cliente" });
//   }
// });

// app.delete("/cliente", async (req, res) => {
//   try {
//     await clienteInterface.delete(req.body);
//     res.status(200).json({ error: "Cliente atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter cliente" });
//   }
// });

// app.post("/cliente", async (req, res) => {
//   try {
//     await clienteInterface.add(req.body);
//     res.status(200).json({ error: "Cliente atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter cliente" });
//   }
// });
// //Cliente routes

// // Endereco routes <-- OK
// const EnderecoRepository = require("./src/repository/EnderecoRepository");
// const EnderecoApplication = require("./src/application/EnderecoApplication");
// const EnderecoInterface = require("./src/facade/EnderecoInterface");

// const enderecoRepository = new EnderecoRepository();
// const enderecoApplication = new EnderecoApplication(enderecoRepository);
// const enderecoInterface = new EnderecoInterface(enderecoApplication);

// app.get("/endereco", async (req, res) => { 
//   try {
//     const endereco = await enderecoInterface.getAll();
//     res.status(200).send(endereco);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter endereco" });
//   }
// });

// app.get("/endereco/:id", async (req, res) => { 
//   const { id } = req.params;
//   try {
//     const row = await enderecoInterface.getById(id);
//     if (!row) {
//       return res.status(404).json({ error: "endereco não encontrado" });
//     }
//     res.status(200).json(row);
//   } catch (error) {
//     res.status(500).json({ error: "Erro interno ao buscar o endereco" });
//   }
// });

// app.put("/endereco/:id", async (req, res) => { 
//   try {
//     const row = await enderecoInterface.update(req);
//     res.status(200).json({ error: "endereco atualizado com sucesso!" });
//   } catch (error) {
//     console.error("Erro ao obter peça por ID:", error);
//     res.status(500).json({ error: "Erro interno ao buscar peça" });
//   }
// });

// app.delete("/endereco", async (req, res) => { 
//   try {
//     await enderecoInterface.delete(req.body);
//     res.status(200).json({ error: "endereco atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter endereco" });
//   }
// });

// app.post("/endereco", async (req, res) => { 
//   try {
//     await enderecoInterface.add(req.body);
//     res.status(200).json({ error: "endereco atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter endereco" });
//   }
// });
// // Endereco routes

// //Estacionamento routes <-- OK

// const EstacionamentoRepository = require("./src/repository/EstacionamentoRepository");
// const EstacionamentoApplication = require("./src/application/EstacionamentoApplication");
// const EstacionamentoInterface = require("./src/facade/EstacionamentoInterface");

// const estacionamentoRepository = new EstacionamentoRepository();
// const estacionamentoApplication = new EstacionamentoApplication(estacionamentoRepository);
// const estacionamentoInterface = new EstacionamentoInterface(estacionamentoApplication);

// app.get("/estacionamento", async (req, res) => { 
//   try {
//     const estacionamento = await estacionamentoInterface.getAll();
//     res.status(200).send(estacionamento);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter estacionamento" });
//   }
// });

// app.get("/estacionamento/:id", async (req, res) => { 
//   const { id } = req.params;
//   try {
//     const row = await estacionamentoInterface.getById(id);
//     if (!row) {
//       return res.status(404).json({ error: "Estacionamento não encontrado" });
//     }
//     res.status(200).json(row);
//   } catch (error) {
//     res.status(500).json({ error: "Erro interno ao buscar o estacionamento" });
//   }
// });

// app.put("/estacionamento/:id", async (req, res) => { 
//   try {
//     const row = await estacionamentoInterface.update(req);
//     res.status(200).json({ error: "Estacionamento atualizado com sucesso!" });
//   } catch (error) {
//     console.error("Erro ao obter estacionamento por ID:", error);
//     res.status(500).json({ error: "Erro interno ao buscar estacionamento" });
//   }
// });

// app.delete("/estacionamento", async (req, res) => { 
//   try {
//     await estacionamentoInterface.delete(req.body);
//     res.status(200).json({ error: "Estacionamento atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter estacionamento" });
//   }
// });

// app.post("/estacionamento", async (req, res) => { 
//   try {
//     await estacionamentoInterface.add(req.body);
//     res.status(200).json({ error: "Estacionamento atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter estacionamento" });
//   }
// });

// //Estacionamento routes

// // Pagamento routes <-- OK
// const PagamentoRepository = require("./src/repository/PagamentoRepository");
// const PagamentoApplication = require("./src/application/PagamentoApplication");
// const PagamentoInterface = require("./src/facade/PagamentoInterface");

// const pagamentoRepository = new PagamentoRepository();
// const pagamentoApplication = new PagamentoApplication(pagamentoRepository);
// const pagamentoInterface = new PagamentoInterface(pagamentoApplication);

// app.get("/pagamento", async (req, res) => { 
//   try {
//     const pagamento = await pagamentoInterface.getAll();
//     res.status(200).send(pagamento);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter pagamento" });
//   }
// });

// app.get("/pagamento/:id", async (req, res) => { 
//   const { id } = req.params;
//   try {
//     const row = await pagamentoInterface.getById(id);
//     if (!row) {
//       return res.status(404).json({ error: "pagamento não encontrado" });
//     }
//     res.status(200).json(row);
//   } catch (error) {
//     res.status(500).json({ error: "Erro interno ao buscar o pagamento" });
//   }
// });

// app.put("/pagamento/:id", async (req, res) => { 
//   try {
//     const row = await pagamentoInterface.update(req);
//     res.status(200).json({ error: "pagamento atualizado com sucesso!" });
//   } catch (error) {
//     console.error("Erro ao obter peça por ID:", error);
//     res.status(500).json({ error: "Erro interno ao buscar peça" });
//   }
// });

// app.delete("/pagamento", async (req, res) => { 
//   try {
//     await pagamentoInterface.delete(req.body);
//     res.status(200).json({ error: "pagamento atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter pagamento" });
//   }
// });

// app.post("/pagamento", async (req, res) => { 
//   try {
//     await pagamentoInterface.add(req.body);
//     res.status(200).json({ error: "pagamento atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter pagamento" });
//   }
// });
// // Pagamento routes

// // Registro routes <-- OK

// const RegistroRepository = require("./src/repository/RegistroRepository");
// const RegistroApplication = require("./src/application/RegistroApplication");
// const RegistroInterface = require("./src/facade/RegistroInterface");

// const registroRepository = new RegistroRepository();
// const registroApplication = new RegistroApplication(registroRepository);
// const registroInterface = new RegistroInterface(registroApplication);


// app.get("/registro", async (req, res) => {
//   try {
//     const registro = await registroInterface.getAll();
//     res.status(200).send(registro);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter registro" });
//   }
// });

// app.get("/registro/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const row = await registroInterface.getById(id);
//     if (!row) {
//       return res.status(404).json({ error: "Registro não encontrado" });
//     }
//     res.status(200).json(row);
//   } catch (error) {
//     res.status(500).json({ error: "Erro interno ao buscar o registro" });
//   }
// });

// app.put("/registro/:id", async (req, res) => {
//   try {
//     const row = await registroInterface.update(req);
//     res.status(200).json({ error: "Registro atualizado com sucesso!" });
//   } catch (error) {
//     console.error("Erro ao obter registro por ID:", error);
//     res.status(500).json({ error: "Erro interno ao buscar registro" });
//   }
// });

// app.delete("/registro", async (req, res) => { 
//   try {
//     await registroInterface.delete(req.body);
//     res.status(200).json({ error: "Registro atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter registro" });
//   }
// });

// app.post("/registro", async (req, res) => { 
//   try {
//     await registroInterface.add(req.body);
//     res.status(200).json({ error: "Registro atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter registro" });
//   }
// });

// // Registro routes


// // TipoPagamento routes <-- OK
// const TipoPagamentoRepository = require("./src/repository/TipoPagamentoRepository");
// const TipoPagamentoApplication = require("./src/application/TipoPagamentoApplication");
// const TipoPagamentoInterface = require("./src/facade/TipoPagamentoInterface");

// const tipoPagamentoRepository = new TipoPagamentoRepository();
// const tipoPagamentoApplication = new TipoPagamentoApplication(tipoPagamentoRepository);
// const tipoPagamentoInterface = new TipoPagamentoInterface(tipoPagamentoApplication);

// app.get("/tipoPagamento", async (req, res) => { 
//   try {
//     const tipoPagamento = await tipoPagamentoInterface.getAll();
//     res.status(200).send(tipoPagamento);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter tipoPagamento" });
//   }
// });

// app.get("/tipoPagamento/:id", async (req, res) => { 
//   const { id } = req.params;
//   try {
//     const row = await tipoPagamentoInterface.getById(id);
//     if (!row) {
//       return res.status(404).json({ error: "tipoPagamento não encontrado" });
//     }
//     res.status(200).json(row);
//   } catch (error) {
//     res.status(500).json({ error: "Erro interno ao buscar o tipoPagamento" });
//   }
// });

// app.put("/tipoPagamento/:id", async (req, res) => { 
//   try {
//     const row = await tipoPagamentoInterface.update(req);
//     res.status(200).json({ error: "tipoPagamento atualizado com sucesso!" });
//   } catch (error) {
//     console.error("Erro ao obter peça por ID:", error);
//     res.status(500).json({ error: "Erro interno ao buscar peça" });
//   }
// });

// app.delete("/tipoPagamento", async (req, res) => { 
//   try {
//     await tipoPagamentoInterface.delete(req.body);
//     res.status(200).json({ error: "tipoPagamento atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter tipoPagamento" });
//   }
// });

// app.post("/tipoPagamento", async (req, res) => { 
//   try {
//     await tipoPagamentoInterface.add(req.body);
//     res.status(200).json({ error: "tipoPagamento atualizado com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao obter tipoPagamento" });
//   }
// });
// // TipoPagamento routes

// // vaga routes <-- OK
// const VagaRepository = require("./src/repository/VagaRepository");
// const VagaApplication = require("./src/application/VagaApplication");
// const VagaInterface = require("./src/facade/VagaInterface");

// const vagaRepository = new VagaRepository();
// const vagaApplication = new VagaApplication(vagaRepository);
// const vagaInterface = new VagaInterface(vagaApplication);

// app.get("/vaga", async (req, res) => {
//   try {
//     const vaga = await vagaInterface.getAll();
//     res.status(200).send(vaga);
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ error: "Erro ao obter vaga" });
//   }
// });

// app.get("/vaga/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const row = await vagaInterface.getById(id);
//     if (!row) {
//       return res.status(404).json({ error: "vaga não encontrada" });
//     }
//     res.status(200).json(row);
//   } catch (error) {
//     res.status(500).json({ error: "Erro interno ao buscar a vaga" });
//   }
// });

// app.put("/vaga/:id", async (req, res) => { 
//   try {
//     const row = await vagaInterface.update(req);
//     res.status(200).json({ error: "tipoPagamento atualizado com sucesso!" });
//   } catch (error) {
//     console.error("Erro ao obter peça por ID:", error);
//     res.status(500).json({ error: "Erro interno ao atualizar vaga" });
//   }
// });

// app.delete("/vaga", async (req, res) => { 
//   try {
//     await vagaInterface.delete(req.body);
//     res.status(200).json({ error: "vaga atualizada com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao deletar vaga" });
//   }
// });

// app.post("/vaga", async (req, res) => { 
//   try {
//     await vagaInterface.add(req.body);
//     res.status(200).json({ error: "vaga atualizada com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao atualizar vaga" });
//   }
// });
// // vaga routes

// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`);
// });

