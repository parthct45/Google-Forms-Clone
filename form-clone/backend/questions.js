const router = require('express').Router();
let Questions = require('./form_questions_model') ; 

// yeh route krne keliye vegere hai 
router.route('/:id/:title').get((req , res) => {
    Questions.find({title : req.params.title}) 
    .then(form => res.json(form) ) 
    .catch(err => res.status(400).json('Error' + err)) ;
}) ; 

router.route('/:id/:title/add').post((req , res) =>{
// router.route('/add').post((req , res) => {
    //  const id  = req.body._id ;
    const title = req.body.title ;
    const questions = req.body.questions ; 
    const newQuestionform = new Questions({title , questions}) ; 
    newQuestionform.save() 
    .then(() => res.json('Question form saved successfully')) 
    .catch((err) => res.status(400).json('Error' + err)) ;

}) 

module.exports = router ; 


