import React, { useEffect, useState } from "react";
import "./Nav.css";
import Search from "./SearchBox/index";
import User from "./assets/watchwave.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

function Nav() {
  //  const [show,handleShow] = useState(false)
  //     useEffect(()=>{
  //         window.addEventListener("scroll", ()=>{
  //             if(window.scrollY > 100){
  //                 handleShow(true)
  //             }else {
  //                 handleShow(false)
  //             }
  //         })
  //         return ()=>{
  //             window.removeEventListener("scroll")
  //         }
  //     },[])
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Avatar alt="Logo" src={User} />
          </IconButton>
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
