const bcrypt = require("bcrypt");
const { userFacade } = require("../dependency/injection");
const { User } = require("../data/dbContext");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const document = req.body.document;
  const document_type = req.body.document_type;
  const phone = req.body.phone;
  const access_level = req.body.access_level;

  bcrypt
    .hash(password, 12)
    .then((newPassword) => {
      userFacade.add({ name: name, email: email, password: newPassword, document: document, document_type: document_type, phone: phone, access_level: access_level});
    })
    .then((result) => {
      res.status(201).json({ result: "Usuário cadastrado com sucesso" });
    })
    .catch((err) => {
      res.status(500);
    });
    // LEMBRAR DE COLOCAR LOGICA PARA DESCOBRIR SE É CPF OU CNPJ AUTOMATICAMENTE
};
exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  userFacade
    .login(email, password)
    .then((token) => {
      res.status(200).json({ token: token });
    })
    .catch((error) => {
      res.status(401).json({ error: error.message });
    });
};
