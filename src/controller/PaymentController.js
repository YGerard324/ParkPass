const {paymentFacade} = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await paymentFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.makePayment = async (req, res) => {
    let row = await paymentFacade.makePayment(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await paymentFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const {id} = req.params;
    let row = await paymentFacade.getById(id);
    res.status(200).json(row);
};
module.exports.update = async (req, res) => {
    let row = await paymentFacade.update(req);
    res.status(200).json(row);
};
module.exports.delete = async (req, res) => {
    const {id} = req.params;
    let row = await paymentFacade.delete(id);
    res.status(200).json(row);
};
