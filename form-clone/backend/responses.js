const express = require('express') ;
const router = express.Router() ;
let Response = require('./responsechild') ;

router.route('/:id/:title').get((req , res) =>{
    Response.find({title :req.params.title}) 
    .then(responses => res.json(responses)) 
    .catch(err => res.status(400).json('Error '+ err)) ;
}) 

router.route('/:title/submit').post((req , res) =>{
    const title = req.body.title ; 
    const response = req.body.response ; 

    const newResponse = new Response({title , response}) ; 

    newResponse.save()
    .then(() => res.json('Response saved')) 
    .catch(err => res.status(400).json('Error' + err)) ; 





    
}) 

module.exports = router ; 
