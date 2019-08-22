var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/budget', function (req, res) {
  res.render("budget");
});

module.exports = router;
