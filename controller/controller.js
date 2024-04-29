exports.post = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`[POST] equisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};