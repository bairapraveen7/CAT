import React from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <Box className={classes.header}>
      <div className={classes.heading}>
        <Typography sx={{fontSize: '1.5em', fontStyle: 'italic'}}><span className={classes.firstLetterOrange}>C</span>ontract <span className={classes.firstLetterOrange}>A</span>nalysis <span className={classes.firstLetterOrange}>T</span>ool</Typography>
      </div>
      <div className={classes.headerMenu}>
        <Link sx={{color: '#012277',textDecoration: 'none',fontWeight: 600, fontSize: '0.8em'}}>Overview</Link>
        <Link sx={{color: '#012277',textDecoration: 'none',fontWeight: 600, fontSize: '0.8em', ml: 6, mr: 4}}>Upload Page</Link>
        <Link sx={{color: '#012277',textDecoration: 'none',fontWeight: 600, fontSize: '0.8em', ml:4, mr:6}}>Data Dictionary</Link>
        <Link sx={{color: '#012277',textDecoration: 'none',fontWeight: 600, fontSize: '0.8em'}}>User Guide</Link>
      </div>
      <div className={classes.profile}>
        <Typography variant="p">Welcome</Typography>
        <Button variant="outlined" sx={{ borderRadius: "3em", mx: "1em" }}>
          Rohit Agarwal
        </Button>
        <PersonPinIcon />
      </div>
    </Box>
  );
};
