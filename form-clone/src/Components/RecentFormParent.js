import React, { useEffect, useRef, useState } from "react";
import ChildComponent from "./ChildComponent";
import ResponsesDisplayComponent from "./Responses";
import axios from 'axios' ; 

import { Paper, Tab, Tabs, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const styles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: 12,
    color: "#444",
    textTransform: "capitalize",
    height: 10,
    fontWeight: 600,
  },
  tabs: {
    height: 10,
  },
});

const RecentFormParentComponent = () => {
  const classes = styles();

  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 

  const {id , title} = useParams() ; 

  useEffect(() => {
    console.log(title) ; 
    axios.get(`http://localhost:5000/questions/${id}/${title}`)
    .then(res => {
        console.log(res.data) ; 

        setFormData(res.data[0]) ;
        

    })
  },[value]) ; 

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/form");
  //     const jsonData = await response.json();
  //     setFormData(jsonData);
  //     // console.log(formData);
  //     // console.log("json");
  //     // console.log(jsonData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

//   const handleFormSubmit = (e) => {
//     e.preventDefault() ;
    
//     // Filter out questions with no question text and blank options
//     const filteredQuestions = formData.filter((question) => {
//       const hasQuestionText = question.question.trim() !== "";
//       const hasOptions =
//         question.options.length > 0 &&
//         question.options.every((option) => option.trim() !== "");
//       return hasQuestionText && hasOptions;
//     });
//     const form = {
//       //  _id:id ,  
//       title: title.current.value,
//       questions: filteredQuestions,
//     };  

//     const main ={
//       title:title.current.value ,
//       id:id 
//     } ; 
    // console.log(form) ; 

//     if (form.title === "") form.title = "Untitled Form";
//     // Send filteredQuestions to the backend
//     const formURL = `http://localhost:3000/form/response/${id}/${form.title}`;
//     alert(`Link to answer : ${formURL}`);
//     axios.post(`http://localhost:5000/questions/${id}/${form.title}/add`,form)
//     .then(res => console.log(res.data)) ;

//     axios.post(`http://localhost:5000/forms/${id}/${main.title}/add`,form)
//     .then(res => console.log(res.data)) ; 
//   };

  if (!formData) {
    return <h6>Loading...</h6>;
  }

  return formData ? (
    <div>
      <input
        type="text"
        value={formData.title}
        placeholder="Form Title"
      />
      {/* <button onClick={handleFormSubmit}>Submit Form</button> */}

      <div>
        <Paper className={classes.root}>
          <Tabs
            centered
            className={classes.tabs}
            value={value}
            onChange={handleChange}
          >
            <Tab className={classes.tab} label="Questions"></Tab>
            <Tab className={classes.tab} label="Responses"></Tab>
          </Tabs>
        </Paper>
        <div className="panel-container">
          <div>
            <TabPanel value={value} index={0}>
              <ChildComponent
                formQuestions={formData.questions}
                setFormData={setFormData}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ResponsesDisplayComponent/>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default RecentFormParentComponent;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
