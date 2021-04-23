var express = require('express');
var router = express.Router();
var user_controller=require('../controllers/user.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/login');
router.post('/login'); // When username and password is five

router.get('/logout') //here this route will destroy all sesion


module.exports = router;
