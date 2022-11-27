let express = require('express');
let productosController = require('../../controllers/productosController');

let router = express.Router();

router.use('/', productosController.listado);

router.get('/:idProducto', productosController.detalle);

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios);

module.exports = router;