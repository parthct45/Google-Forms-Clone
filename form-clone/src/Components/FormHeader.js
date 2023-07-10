import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import React from "react";
import "../Styles/FormHeader.css";
import { Link } from "react-router-dom";
import { useState } from "react"; 
import axios from 'axios' ;

function FormHeader({ form_title , form_fields} ) { 
  const [formtitle ,setFormtitle] = useState(form_title) ;
  const onTitleChange = (e) =>{ 
    setFormtitle(e.target.value) ; 
  } 
  const onSubmit = () =>{

    const form = {
      title: formtitle ,
      fields:form_fields 
    }
    // const fields = form_fields ; 
    axios.post("http://localhost:5000/questions/add" ,form ) 
    .then(res => console.log(res.data)) ; 
  }


  return (
    <>
      <div className="form-header-container">
        <div className="form-header-left">
          <Link to={"/"}>
            <DescriptionIcon style={{ height: "50px", width: "50px" }} /> 
          </Link>
          <input value={formtitle} className="form-header-text" onChange={onTitleChange} 
          placeholder="Untitled"/> 
        </div> 
        <Button
          variant="contained"
          style={{
            backgroundColor: "#7316c4",
            padding: "5px",
            paddingLeft: "20px",
            paddingRight: "20px", 
            
          }} 
          onClick={onSubmit}
>
          Send  
        </Button>
      </div>
    </>
  );
}

export default FormHeader;
