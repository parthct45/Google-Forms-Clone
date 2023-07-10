import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../Styles/Form.css";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RecentFormParentComponent from "./RecentFormParent";

function RecentForm({ img, formTitle, id }) {
  let nav = useNavigate();
  function openForm() {
     nav(`/form/recent/${id}/${formTitle}`) 
  }

  return (
    <div className="form-card" onClick={openForm}>
      <img src={img} alt={formTitle} className="form-image" />
      <div className="form-info">
        <span className="form-text">{formTitle}</span>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default RecentForm;
