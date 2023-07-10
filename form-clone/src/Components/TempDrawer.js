import React from "react";
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import ArticleIcon from "@mui/icons-material/Article";
import GridOnIcon from "@mui/icons-material/GridOn";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";

import { Divider } from "@mui/material";

import "../Styles/tempDrawer.css";

const data = [
  { name: "Docs", icon: <ArticleIcon /> , link:"https://www.google.com/docs/about/"},
  { name: "Sheets", icon: <GridOnIcon />, link:"https://www.google.com/sheets/about/"},
  { name: "Slides", icon: <SlideshowIcon /> , link:"https://www.google.com/slides/about/" },
  { name: "Forms", icon: <DescriptionIcon /> , link:"http://localhost:3000/"},
];

const data2 = [
  { name: "Settings", icon: <SettingsIcon /> },
  { name: "Help & Feedback", icon: <HelpIcon /> },
];

function TempDrawer({ open, setOpen }) {
  const getList = () => (
    <div style={{ width: 300 }} onClick={() => setOpen(false)}>
      <ListItem>
        <div className="drawer-text">Google Forms</div>
      </ListItem>
      <br />
      <Divider />
      <br />
      {data.map((item, index) => (
        <ListItem button key={index} className="item" component="a" href={item.link}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
      <br />
      <Divider />
      <br />
      {data2.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
      <br />
      <Divider />
      <br />
      <ListItem button component="a" href="https://www.google.com/intl/en_in/drive/">
        <ListItemIcon>
          <AddToDriveIcon />
        </ListItemIcon>
        <ListItemText>Drive</ListItemText>
      </ListItem>
      <br />
      <Divider />
      <br /> 
      <br /> 
      <div className="drawer-footer">
        <a href="/#">Privacy Policy</a>
        <a href="/#">Terms of Service</a>
      </div>
    </div>
  );

  return (
    <>
      <Drawer
        open={open}
        anchor={"left"}
        onClose={() => setOpen(false)}
        BackdropProps={{ invisible: true }}
      >
        {getList()}
      </Drawer>
    </>
  );
}

export default TempDrawer;
