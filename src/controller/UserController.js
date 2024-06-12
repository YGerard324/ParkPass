const {userFacade} = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await userFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await userFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const {id} = req.params;
    let row = await userFacade.getById(id);
    res.status(200).json(row);
};
module.exports.update = async (req, res) => {
    let row = await userFacade.update(req);
    res.status(200).json(row);
};
module.exports.delete = async (req, res) => {
    const {id} = req.params;
    let row = await userFacade.delete(id);
    res.status(200).json(row);
};
