var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // if(!req.isAuthenticated()){
  //   req.logOut();
  //   res.redirect('/login');
  // } else {
  //   router.use(express.static(path.join(__dirname, '../../build')))
  //   next();
  // }
  //   var option = {
  //     root: path.join(__dirname, '../../build'),
  //   }
  //   var fileName = req.url.split('/')[req.url.split('/').length-1];
  //   fileName = !fileName || (fileName.length && fileName.length <=0) ? '/index.html' : `/${fileName};

  //   res.sendFile(fileName, option, (err)=>{
  //     if(err){
  //       console.log(`Error sendFile ${fileName} err: ${err}`);
  //     } else {
  //       console.log(`Send file ${fileName} ok...`);
  //     }
  //   });
  //   res.end();
    res.render('index', { title: 'Express' });
  // } else {
  //   // res.render('login', { title: 'Представьтесь пожалуйста' })
  // }
});

module.exports = router;
