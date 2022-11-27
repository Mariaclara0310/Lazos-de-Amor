const productosController = {
    
    listado: function() {
        console.log("Usuario entró al listado de productos.")
    },

    crear: function() {},

    detalle: function(req,send) {
        res.send('Bienvenidos al detalle del producto' + req.params.idProducto);
    },

   detalleComentarios: function(req,res) {
    if (req.params.idComentario == undefined){
        res.send('Bienvenidos a los comentarios del producto' + req.params.idProducto);
    }else {
        res.send('Bienvenidos a los comentarios del producto' + req.params.idProducto + ' y estas enfocado en el comentario' + req.params.idComentario);
    
    }
   },
};

module.exports = productosController;