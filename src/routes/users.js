const router = require('express').Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.render('catalogo', { title: 'Bienvenid@ a tu tienda Online Invitado' });
});

module.exports = router;
