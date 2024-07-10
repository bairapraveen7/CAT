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
        <Typography sx={{fontSize: '1.5em', fontStyle: 'italic'}}>Contract Analysis Tool</Typography>
      </div>
      <div className={classes.headerMenu}>
        <Button variant="text">Overview</Button>
        <Button variant="text" sx={{mx:4}}>Upload Page</Button>
        <Button variant="text" sx={{mx:4}}>Data Dictionary</Button>
        <Button variant="text">User Guide</Button>
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
