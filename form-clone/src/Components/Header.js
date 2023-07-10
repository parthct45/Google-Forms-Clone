import React, { useState } from "react";
import "../Styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import { Search } from "@material-ui/icons";
import { Apps } from "@mui/icons-material";
import DescriptionIcon from "@mui/icons-material/Description";
import TempDrawer from "./TempDrawer";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TempDrawer open={open} setOpen={setOpen} />
      <div className="header-container">
        <div className="left">
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <a href="/">
            <DescriptionIcon style={{ height: "50px", width: "50px" }} />
          </a>
          <div className="title">Forms</div>
        </div>
        <div className="search">
          <IconButton>
            <Search />
          </IconButton>
          <input type="text" placeholder="Search" />
        </div>
        <div className="right">
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <Avatar />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Header;
