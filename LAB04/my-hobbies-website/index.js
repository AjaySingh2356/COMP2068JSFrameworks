const express = require('express');
const router = express.Router();

router.get('/gardening', function(req, res, next) {
  res.render('gardening', { title: 'Gardening' });
});

router.get('/painting', function(req, res, next) {
  res.render('painting', { title: 'Painting' });
});

router.get('/coding', function(req, res, next) {
  res.render('coding', { title: 'Coding' });
});

router.get('/gaming', function(req, res, next) {
  res.render('gaming', { title: 'Gaming' });
});

module.exports = router;