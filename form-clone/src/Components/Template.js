import React from "react";
import "../Styles/Template.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function Template({ img, text }) {
  let navigate = useNavigate();

  function createForm() {
    const id = uuidv4();
    navigate(`/form/edit/${id}`);
  }

  return (
    <div className="template-card" onClick={createForm}>
      <img src={img} alt={text} clssName="template-image" />
      <div className="template-text">{text}</div>
    </div> 
  );
}

export default Template;
