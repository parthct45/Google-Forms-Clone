import { Paper, Tab, Tabs, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import QuestionList from "./QuestionList";
import "../Styles/FormBody.css";
import { useState } from "react";
import PropTypes from "prop-types";
import ResponseTab from "../Components/ResponseTab";
import Responses from "../Components/Responses";

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

function FormBody({ fields, response, count }) {
  const classes = styles();

  // const [questionBlocks, setQuestionBlocks] = useState(fields);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleAddQuestion = () => {
  //   setQuestionBlocks((prev) => [...prev, { question: "", options: [] }]);
  // };

  // const handleDeleteQuestion = (index) => {
  //   const updatedQuestionBlocks = [...questionBlocks];
  //   updatedQuestionBlocks.splice(index, 1);
  //   setQuestionBlocks(updatedQuestionBlocks);
  // };
  return (
    <>
      <div className="formBodyWrapper">
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
              <QuestionList
                fields={fields}
                // handleAddQuestion={handleAddQuestion}
                // handleDeleteQuestion={handleDeleteQuestion}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Responses />
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormBody;

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
