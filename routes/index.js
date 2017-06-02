var express = require('express');
var router = express.Router();

var lista = [
  {"nombre": "Javier"},
  {"nombre": "Jorge"},
  {"nombre": "Fredy"},
  {"nombre": "Juan"},
  {"nombre": "Aisis"},
  {"nombre": "Henry"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nombres', function(req, res) {
  res.render('lista', {lista});
});

router.post('/nombre/nuevo', function(req, res) {
  
});

module.exports = router;
