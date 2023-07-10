// Tera kuch kaam hoga toh batata abhi keliye theher jao 
const mongoose = require('mongoose') ;

const Schema = mongoose.Schema ;  
// const questionSchema = new Schema({
//   question: {
//     type: String,
//     required: true
//   },
//   options: {
//     type: [String],
//     required: true
//   }
// });

const formSchema = new Schema({
    title :{
      type : String ,
      required : true , 
    }  , 
    id:{
      type : String, 
      unique: true,
    }
  }) 
//       response: {
//         count: 0,
//         responses: [
//           [1, 2, 3, 4, 1],
//           [4, 1, 2, 3],
//           [4, 3, 0],
//           [1, 6],
//         ],
// } 
  //   count :{
  //     type: Number,
  //     default: 0,
  //   } ,

  //   responses :{ 
  //     type: [[Number]], // Array of arrays of numbers
  //     default: [], 
  //   } 
  //  }


const Form = mongoose.model('Form' , formSchema) ; 
module.exports = Form ;  
