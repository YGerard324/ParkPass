const {registerFacade} = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await registerFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await registerFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const {id} = req.params;
    let row = await registerFacade.getById(id);
    res.status(200).json(row);
};
module.exports.update = async (req, res) => {
    let row = await registerFacade.update(req);
    res.status(200).json(row);
};
module.exports.delete = async (req, res) => {
    const {id} = req.params;
    let row = await registerFacade.delete(id);
    res.status(200).json(row);
};
