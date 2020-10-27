var express = require('express');
var router = express.Router();
var Request = require("request");
const sequelize = require("../models/User");

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/question/add', (req, res) => {
    let quizName = req.body.quizName;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let totalQues = req.body.totalQues;
    let question = JSON.stringify(req.body.question);
    let question1 = JSON.stringify(question)
    sequelize.query("INSERT INTO `quiz` (`quizName`,`startDate`,`endDate`,`totalQues`,`question`) VALUES (?,?,?,?,?);",{type:sequelize.QueryTypes.INSERT,raw:true,replacements:[quizName, startDate, endDate, totalQues, question1]}).then(rows=>{
      //console.log(rows[0]);
      res.json(rows[0])
    })
    // console.log(req.body, question1, "daf")
})

router.get('/question', (req, res) => {
  
  sequelize.query("SELECT * FROM `quiz`",{type:sequelize.QueryTypes.SELECT,raw:true}).then(rows=>{
    console.log(rows)
 
     res.json(rows);
   })
})

router.get('/question/get', (req, res) => {
  let id = req.param('id')
  console.log(id, "id")
  sequelize.query("SELECT question FROM `quiz` WHERE id = ?",{type:sequelize.QueryTypes.SELECT,raw:true, replacements:[id]}).then(rows=>{
    // let data = JSON.parse(rows)
    console.log(rows)
     res.json(rows[0].question);
   })
})


module.exports = router;
