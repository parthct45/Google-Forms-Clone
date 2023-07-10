import React, { useEffect, useState } from "react";
import QuestionBlock from "../Components/QuestionBlock";
import "../Styles/QuestionList.css";

const QuestionList = ({ fields }) => {
  const [questionBlocks, setQuestionBlocks] = useState(fields);

  const handleAddQuestion = () => {
    setQuestionBlocks((prev) => [
      ...prev,
      { question: "", options: [], id: prev.length + 1 },
    ]);
  };

//  const handleDeleteQuestion = (e) => {
//     const updatedQuestionBlocks = [...questionBlocks];
//     updatedQuestionBlocks.splice(e.target.id, 1);
//     setQuestionBlocks(updatedQuestionBlocks);
//     // console.log(updatedQuestionBlocks);
//   };

  useEffect(() => {
    // console.log(questionBlocks);
  }, [questionBlocks]);

  return (
    <div className="questionList">
      {questionBlocks.map((questionBlock, index) => (
        <div key={index} id ={index} className="questionWrapper">
          <QuestionBlock
            key={index}
            ques={questionBlock}
          />  

          {/* <button onClick={handleDeleteQuestion}>Delete Question</button> */}
        
        </div>
      ))}
         {/* <button className="deletBtn"   onClick={handleDeleteQuestion}>
          Delete Question
          </button>  */}
      <button className="addBtn" onClick={handleAddQuestion}>
        Add Question
      </button> 
      
    </div>
  );
};

export default QuestionList;
