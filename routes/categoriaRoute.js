var express = require('express');
var categoria = require('../model/categoria');
var router = express.Router();

router.get('/api/categoria', function(req, res) {
  categoria.selectAll(function(error, resultados){
    if (typeof resultados !== undefined) {
      res.json(resultados);
    } else {
      res.json({"Mensaje": "No hay categorias"});
    }
  });
});

router.get('/api/categoria/:idCategoria', function(req, res) {
  var idCategoria = req.params.idCategoria;

  categoria.select(idCategoria, function(error, resultado){
    if (typeof resultado !== undefined) {
      res.json(resultado);
    } else {
      res.json({"Mensaje": "No hay categorias"});
    }
  });
});


module.exports = router;
