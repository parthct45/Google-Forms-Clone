const express = require('express') ;
const cors = require('cors') ;
const mongoose = require('mongoose') ;

require('dotenv').config() ;

const app = express() ;
const port = process.env.PORT || 5000 ;

app.use(cors()) ;
app.use(express.json()) ; // for parsing json 



const uri = process.env.ATLAS_URI ; // ATLAS URI is environmental variable 
mongoose.connect(uri , {useNewUrlParser:true} ) ;

const connection = mongoose.connection ;
connection.once('open' , () => { // once the connection is established this will be logged 
    console.log("MongoDB database connection established succesfully ") ;
})
 const responseRouter = require('./responses') ; 

const questionRouter = require('./questions') ; 

const formRouter = require('./forms') ; 

app.use('/response', responseRouter) ;  
app.use('/questions',questionRouter) ; 
app.use('/forms',formRouter) ; 



app.listen(port , () =>{
  console.log(`Server is running on port ${port} `) ; 
})
// const host = "localhost";
// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   if (req.url == "/form") {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const temp = {
//       title: "Untitled",
//       fields: [
//         { question: "Question1?", options: ["A", "B", "Q", "D", "R"], id: 0 },
//         { question: "Question2?", options: ["A", "B", "P", "D"], id: 1 },
//         { question: "Question3?", options: ["A", "F", "C"], id: 2 },
//         { question: "Question4?", options: ["A", "D"], id: 3 },
//       ],
//       response: {
//         count: 0,
//         responses: [
//           [1, 2, 3, 4, 1],
//           [4, 1, 2, 3],
//           [4, 3, 0],
//           [1, 6],
//         ],
//       },
//     };
//     res.end(JSON.stringify(temp));
//   } else {
//     res.end("404 not found");
//   }
// });

// server.listen(port, (req, res) => {
//   console.log("server ready");
// });
