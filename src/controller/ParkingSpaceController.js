const {parkingSpaceFacade} = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await parkingSpaceFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await parkingSpaceFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const {id} = req.params;
    let row = await parkingSpaceFacade.getById(id);
    res.status(200).json(row);
};
module.exports.update = async (req, res) => {
    let row = await parkingSpaceFacade.update(req);
    res.status(200).json(row);
};
module.exports.delete = async (req, res) => {
    const {id} = req.params;
    let row = await parkingSpaceFacade.delete(id);
    res.status(200).json(row);
};
