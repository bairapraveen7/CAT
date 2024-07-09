import React from "react";
import Box from '@mui/material/Box'
import { AppBar, Button, IconButton, Link, Toolbar, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import classes from "./Header.module.css"

export const Header = () => {
    const headerTheme = createTheme({
         headerMenu:{
            color: '#002277'
         }
    })
    return (
     <ThemeProvider theme={headerTheme}>
        <Box className={classes.header}>
            
                <div className={classes.heading}>
                <Typography>Contract Analysis Tool</Typography> 
                </div>
                <div className={classes.headerMenu}>
                <Button variant="text" color='headerTheme.headerMenu.color'>Overview</Button>
                <Button variant="text">Upload Page</Button>
                <Button variant="text">Data Dictionary</Button>
                <Button variant="text">User Guide</Button>
                </div>
                <div className={classes.profile}>
                <Typography variant="p">Welcome   </Typography>
                <Button variant="outlined" sx={{borderRadius: "3em", mx: "1em"}}>Rohit Agarwal</Button>
                <PersonPinIcon />
                </div>
                   
            
        </Box>
        </ThemeProvider>
    )
}