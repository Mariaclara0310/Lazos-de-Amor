const router = require('express').Router();

router.get('/catalogo', function(req, res, next) {
  res.render('catalogo');
});

module.exports = router;
