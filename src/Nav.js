import React, { useEffect, useState } from "react";
import "./Nav.css";
import Search from "./SearchBox/index";
import Logo from "./assets/watchwavelogo.png";
import User from "./assets/watchwave.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

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

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener in the cleanup function
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
            {/* <div className={`nav ${show && "nav_black"}`}> */}
            <img
              // className={`nav_logo ${show && "nav_black"}`}
              src={Logo}
              alt="Watch-Wave"
              style={{ borderRadius: "100px", height: "50px", width: "50px" }}
            />
            {/* </div> */}
          </IconButton>
          <Search />
          <img className="nav_avatar" src={User} alt="" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
