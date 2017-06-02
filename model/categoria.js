var database = require('./database');
var categoria = {};
categoria.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM Categoria",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

categoria.select = function(idCategoria, callback) {
  if(database) {
    var consulta = "SELECT * FROM Categoria WHERE idCategoria = ?";
    database.query(consulta,idCategoria, function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });
  }
}
module.exports = categoria;
