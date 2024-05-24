const {clientFacade} = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await clientFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await clientFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const {id} = req.params;
    let row = await clientFacade.getById(id);
    res.status(200).json(row);
};
module.exports.update = async (req, res) => {
    let row = await clientFacade.update(req);
    res.status(200).json(row);
};
module.exports.delete = async (req, res) => {
    const {id} = req.params;
    let row = await clientFacade.delete(id);
    res.status(200).json(row);
};