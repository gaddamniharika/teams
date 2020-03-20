var express = require('express');
const router = express.Router();

var insert = require('../services/insert.js');
var validity = require('../services/checkUser.js');
var average = require('../services/average.js');

function rateCheck(req,res,next)
{
    if((req.body.rate < 6)&&(req.body.rate >= 0))
        next();
    else 
    {
        res.statusCode = 404;
        res.send("rate parameter should be less than 6");
    }      
}
async function userCheck(req,res,next)
{
     user_check = await validity(req.params.id);
     if(user_check == false)
        next();
     else
        res.send("user already exist")
     
}
router.post('/:id',rateCheck, userCheck, async (req,res) => { 
      result = await insert(req.params.id,req.body.name,req.body.rate);
      res.json({result});
});
router.get('/:team',async (req,res)=>{
      teams_result = await average(req.params.team);
      res.send(teams_result);
     // res.json({teams_result});
})
router.use((err,res)=>{
    if(err)
        res.send("error occurred");
});
module.exports = router;