var express = require('express');
var router = express.Router();
/*const functions = require('firebase-function');*/

/* GET home page. */
router.get('/',ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Members' });
});
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/users/login');
  res.redirect('/users/capteur');

}

module.exports = router;
