const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenid@ a tu tienda Online Invitado' });
});


module.exports = router;
