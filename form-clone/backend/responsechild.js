const mongoose = require('mongoose'); 
const Schema = mongoose.Schema ; 

//  const responseSchema = new Schema({
//    questions: {
//      type: Object,
//      required: true
//    }
//  })
const responseMainSchema = new Schema({
  title:{
    type:String ,
    required:true , 
  },
  response:{
    type:Object ,
    required : true , 
  }
}) 

const Response = mongoose.model('Response', responseMainSchema);
module.exports = Response;