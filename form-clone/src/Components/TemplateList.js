import React from "react";

import Template from "./Template";
import "../Styles/TemplateList.css";

import blankImage from "../Images/blank.png";

const templates = [
  {
    img: blankImage,
    text: "Blank",
  },
];

function TemplateList() {
  return (
    <div className="template-list">
      {templates.slice(0, 5).map((template, index) => (
        <Template key={index} img={template.img} text={template.text} />
      ))}
    </div>
  );
}

export default TemplateList;
