import React, { useContext } from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import classes from "./Header.module.css";
import { BackgroundContext } from "../../Hooks/BackgroundContext";
import AppClasses from '../../App.module.css'
import { SELECT_HOME } from "../../Data/Config";

const LinkSxstyle = {
  color: '#012277',textDecoration: 'none',fontWeight: 600, fontSize: '0.9em'
}

export const Header = () => {
  const { value, setValue}  = useContext(BackgroundContext);
  const color = value == SELECT_HOME ? 'secondary' : 'primary';

  return (
    <Box className={classes.header}>
      <div className={classes.title}>
        <img className={classes.titleImage} src="images/CAT_TITLE.png" />
      </div>
      <div className={classes.headerMenu}>
        <Link sx={LinkSxstyle}>Overview</Link>
        <Link sx={{...LinkSxstyle, ml: 10, mr: 5}}>Upload Page</Link>
        <Link sx={{...LinkSxstyle, ml:5, mr:10}}>Data Dictionary</Link>
        <Link sx={LinkSxstyle}>User Guide</Link>
      </div>
      <div className={classes.profile}>
        {color && <Typography variant="p" color="secondary">Welcome</Typography>}
        <Button variant="outlined" color={color} sx={{ borderRadius: "3em", mx: "1em" }}>
          Rohit Agarwal
        </Button>
        <PersonPinIcon color={color} fontSize="large" />
      </div>
    </Box>
  );
};
