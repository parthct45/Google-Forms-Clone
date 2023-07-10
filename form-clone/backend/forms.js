const router = require('express').Router() ; 
let Forms = require('./form_model') ; 

// yeh route krne keliye vegere hai 
router.route('/').get((req , res) => {
    Forms.find() 
    .then(form => res.json(form) ) 
    .catch(err => res.status(400).json('Error' + err)) ;
}) ; 

router.route('/:id/:title/add').post((req , res) =>{
// router.route('/add').post((req , res) => {
    //  const id  = req.body._id ;
    const title = req.body.title ; 
    const id = req.body.id ; 
    const Form = new Forms({title , id}) ; 
    Form.save() 
    .then(() => res.json('Form saved succesfully ')) 
    .catch((err) => res.status(400).json('Error' + err)) ;

}) 

module.exports = router ; 