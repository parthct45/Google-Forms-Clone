import "../Styles/Templates.css";
import TemplateList from "./TemplateList";

import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { IconButton } from "@mui/material";

function Templates() {
  return (
    <div className="templates-wrapper">
      <div className="templates-info">
        <span className="templates-text">Start a new form</span>
        <div className="templates-options">
          <div className="option1">
            <span>Template gallery</span>
            <UnfoldMoreIcon />
          </div>
          <IconButton style={{ marginLeft: "10px" }}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <TemplateList />
    </div>
  );
}

export default Templates;
