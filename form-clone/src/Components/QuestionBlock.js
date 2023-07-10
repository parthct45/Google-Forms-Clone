import React, { useState } from "react";
import "../Styles/QuestionBlock.css";

const QuestionBlock = ({ ques }) => {
  const [question, setQuestion] = useState(ques.question);
  const [options, setOptions] = useState([...ques.options]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index, e) => {
    const updatedOptions = [...options];
    updatedOptions[index] = e.target.value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  }; 

 const handleDeleteQuestion = () =>{
  setQuestion("") ;
  setOptions([]) ; 


 }

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  }; 
  return (
    <div className="question-block">
      <input
        type="text"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Enter your question"
      />

      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name="options"
              id={`option-${index}`}
              value={option}
            />
            <label htmlFor={`option-${index}`}>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e)}
                placeholder="Enter option"
              />
            </label>
            <button onClick={() => handleRemoveOption(index)}>x</button>
          </li>
        ))}
        { <button  onClick={handleDeleteQuestion}>Clear Question</button> }
      </ul>

      <button className="addBtn" onClick={handleAddOption}>
        Add Option
      </button>
    </div>
  );
};

export default QuestionBlock;
