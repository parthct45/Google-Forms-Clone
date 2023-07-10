import React, { useEffect, useState } from "react";
import RecentForm from "./RecentForm";
import axios from "axios";
import "../Styles/RecentFormList.css";

import blankImage from "../Images/blank.png";
import partyImage from "../Images/party.png" ; 

//get user forms from data base
const formList  = [
  {
    img: blankImage,
    title: "Blank",
    id: "1",
  },
  {
    img: partyImage,
    title: "Party Invite",
    id: "2",
  },
  {
    img: blankImage,
    title: "Blank",
    id: "1",
  },
  {
    img: partyImage,
    title: "Party Invite",
    id: "2",
  },
  {
    img: blankImage,
    title: "Blank",
    id: "1",
  },
  {
    img: partyImage,
    title: "Party Invite",
    id: "2",
  },
  {
    img: blankImage,
    title: "Blank",
    id: "1",
  },
  {
    img: partyImage,
    title: "Party Invite",
    id: "2",
  },
] ; 

function RecentFormsList() {
  const [forms, setForms] = useState(formList);
  
  useEffect(() => {
    axios.get("http://localhost:5000/forms/")
    .then(res =>{
      setForms(res.data)}) ;

  }) ; 
  return (
    <div className="form-list">
      {forms.map((form, index) => (
        <RecentForm key={index} img={blankImage} formTitle={form.title} id={form.id} />
      ))}
    </div>
  );
}

export default RecentFormsList;
