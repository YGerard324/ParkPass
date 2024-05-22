const {addressFacade} = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await addressFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await addressFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const {id} = req.params;
    let row = await addressFacade.getById(id);
    res.status(200).json(row);
};
module.exports.update = async (req, res) => {
    let row = await addressFacade.update(req);
    res.status(200).json(row);
};
module.exports.delete = async (req, res) => {
    const {id} = req.params;
    let row = await addressFacade.delete(id);
    res.status(200).json(row);
};
