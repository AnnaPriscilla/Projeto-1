export function errorHandler(err, req, res, next) {

    res.status(err.status || 500).json({
        erro: err.message || 'Erro interno'
    });

}