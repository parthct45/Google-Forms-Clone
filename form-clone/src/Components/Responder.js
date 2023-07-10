import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/Responder.css"
const ResponderComponent = () => {
  const [formTitle, setFormTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const {id ,title} = useParams() ;  

   useEffect(() => {
    console.log(title); 
    axios.get(`http://localhost:5000/questions/${id}/${title}`) 
    .then(res =>{
       console.log(res) ; 
      if(res.data.length>0){
        setFormTitle(res.data[0].title) ;
        setQuestions(res.data[0].questions) ;
      } 
    })  
   }, []);

 //  const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/form");
  //     const jsonData = await response.json();
  //     setFormTitle(jsonData.title);
  //     setQuestions(jsonData.questions);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const handleOptionChange = (questionIndex, optionIndex) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questions[questionIndex].question]:
        questions[questionIndex].options[optionIndex],
    }));
  };

  const handleSubmit = () => {
    const fresponses = {
      title:formTitle ,
      response:responses , 
    }
    // Send responses to the backend 
    console.log(fresponses) ; 
    axios.post(`http://localhost:5000/response/${fresponses.title}/submit`,fresponses) 
    .then(res => console.log(res.data)) ; 

    alert("Respone saved Successfully !!!") ; 
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="respo">
      <h1>{formTitle}</h1>

      {questions.map((question, questionIndex) => (
        <div className="main" key={questionIndex}>
          <h3>{question.question}</h3>

          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                <input
                  type="radio"
                  name={`question${questionIndex}`}
                  checked={responses[question.question] === option}
                  onChange={() =>
                    handleOptionChange(questionIndex, optionIndex)
                  }
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}

      <button className="specific" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ResponderComponent;
