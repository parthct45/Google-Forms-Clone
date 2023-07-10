import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import { useParams } from "react-router-dom";

function FormEdit() {
  const { id } = useParams();

  //get the form from database using id

  const [form, setForm] = useState({
    title: "Untitled" , 
    fields :[ 
      {question:"Question1?" , options :["A","B","C","D"]} ,
    ] ,
    count : 0 ,
    response :[[]] 
  });  

  useEffect(() => {
    return () =>{
      const title = form.title ;
      const fields = form.fields ;
      setForm(title, fields) ; 
    }
  } 
  ) 
  //  const [title , setTitle] = useState('') ;
  //  const [fields , setFields] = useState([]) ;

  //  const handleSubmit = () =>{
  //   console.log('Title' ,title) ;
  //   console.log('Fields',fields) ;
  //  }
    // const temp = {
    //   title: "Untitled",
    //   fields: [
    //     { question: "Question1?", options: ["A", "B", "Q", "D", "R"] },
    //     { question: "Question2?", options: ["A", "B", "P", "D"] },
    //     { question: "Question3?", options: ["A", "F", "C"] },
    //     { question: "Question4?", options: ["A", "D"] },
    //   ],
    //   response: {
    //     count: 0,
    //     responses: [
    //       [1, 2, 3, 4, 1],
    //       [4, 1, 2, 3],
    //       [4, 3, 0],
    //       [1, 6],
    //     ],
    //   },
    // };
    // setForm(temp);
  //   fetch("http://localhost:5000/form")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setForm(data);
  //     });
  // }, []);

  return (
    <>
      <FormHeader form_title={form.title} form_fields={form.fields} />
      <h1>{id}</h1>
      {form.fields ? (
        <FormBody fields={form.fields}  response={form.response} 
        count = {form.count}
        />
      ) : null}
    </>
  );

}

export default FormEdit ;
