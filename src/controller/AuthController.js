const bcrypt = require("bcrypt");
const { adminFacade } = require("../dependency/injection");
const { Admin } = require("../data/dbContext");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt
    .hash(password, 12)
    .then((newPassword) => {
      adminFacade.add({ name: name, email: email, password: newPassword });
    })
    .then((result) => {
      res.status(201).json({ result: "Usuário cadastrado com sucesso" });
    })
    .catch((err) => {
      res.status(500);
    });
};
exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  adminFacade
    .login(email, password)
    .then((token) => {
      res.status(200).json({ token: token });
    })
    .catch((error) => {
      res.status(401).json({ error: error.message });
    });
};
