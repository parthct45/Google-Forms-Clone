import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Styles/Response.css"

const ResponsesDisplayComponent = () => {
  const resp = [
    {
      "Question 1": "Option A",
      "Question 2": "Option C",
      "Question 3": "Option B",
    },
    {
      "Question 1": "Option B",
      "Question 2": "Option A",
      "Question 3": "Option C",
    },
    {
      "Question 1": "Option C",
      "Question 2": "Option B",
      "Question 3": "Option A",
    },
  ]; 

  const [responses , setResponses] = useState(null) ;
  const {id , title} = useParams() ; 
  useEffect(() => {
    axios.get(`http://localhost:5000/response/${id}/${title}`)
    .then(res => {
      console.log(res.data) ; 
      setResponses(res.data) ; 
    })
  },[]) 



  return responses && responses.length > 0 ?(
    <div className="res_main">
      {/* if(! {responses}){
        <h6>You haven't responded ! </h6>
       } */}
      <h1>All Responses</h1> 
      {responses.map((item, index) => (
        item ? (

        <div className="res"  key={item._id}>
          <h3>Response {index + 1}</h3>

          {Object.entries(item.response).map(([question, option]) => (
            <div key={question}>
              <p>
                 {question}:{option} 
              </p>
            </div>
          ))} 
          <hr />
        </div>
        ):null 
      ))} 
    </div>
  ) : null ;  
};

export default ResponsesDisplayComponent;
