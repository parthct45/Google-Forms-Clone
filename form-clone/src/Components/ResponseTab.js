import React, { useEffect } from "react";
import "../Styles/ResponseTab.css";
import axios from "axios";
import { useState } from "react";
function ResponseTab({ response , count}) {
  const [updatedresponse , setResponse] = useState(response) ;
  const [neWcount , setCount] = useState(count) ; 
  
    useEffect(() =>{
      return () =>{ 
        axios.get('http://localhost:5000/response/') 
      .then(res => { 
        setResponse(res.responses) ;
        setCount(res.count) ;

      }) ; 

      } } ,[]) ;
   
  return (
   
    <>
      <div className="responseContainer">
        <div className="count">{neWcount} responses</div> 
        <div className = "responses">
          {updatedresponse}
        </div>

        
      </div>
    </>
  );
}

export default ResponseTab;
