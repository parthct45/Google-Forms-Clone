const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ; 
const questionSchema = new Schema({
    question: {
      type: String,
      required: true
    },
    options: {
      type: [String],
      required: true
    }
  });

const formQuestionsSchema = new Schema({
    title: {
        type : String ,
        required : true ,
        unique : true ,
        trim : true ,
        minLength:3 ,

    }, 
    questions :{
        // type : [{type:Schema.Types.ObjectId , ref:'questionSchema'}] ,
        type:[questionSchema] , 
        required : true ,

    } 
})  

// const formQuestionsSchema = new Schema({
//   //  _id :{
//   //    type:String ,
//   //    required:true ,
//   //    unique:true 

//   //  },
//   title : {
//     type:String ,
//     required:true ,
//     unique:true ,
//     trim:true,
//     minLength:3 ,
//   } ,

//   questions :{
//     type: Array ,
//     required:true  
//   }
// })

const Questions = mongoose.model('Questions' , formQuestionsSchema) ;
module.exports = Questions ;  