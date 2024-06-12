const {paymentTypeFacade} = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await paymentTypeFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await paymentTypeFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const {id} = req.params;
    let row = await paymentTypeFacade.getById(id);
    res.status(200).json(row);
};
module.exports.update = async (req, res) => {
    let row = await paymentTypeFacade.update(req);
    res.status(200).json(row);
};
module.exports.delete = async (req, res) => {
    const {id} = req.params;
    let row = await paymentTypeFacade.delete(id);
    res.status(200).json(row);
};
