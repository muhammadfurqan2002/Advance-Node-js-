var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/failed',(req,res)=>{
  req.flash("user",{
    name:"muhammad furqan",
    age:21,
    cast:"butt"
  });
  res.send("flash set successfully");
})

router.get('/restarted',(req,res)=>{
  console.log(req.flash("user"));
  res.send("flash get successfully");
})

module.exports = router;
