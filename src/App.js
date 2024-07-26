
import { HomePage } from './Pages/homePage';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { CustomInputRow } from './Components/Main/CustomInputRow';
import { Header } from './Components/layout/Header';
import { Xpage } from './Pages/Xpage';
import classes from './App.module.css'
import { useState } from 'react';
import { BackgroundContext } from './Hooks/BackgroundContext';
import { SELECT_HOME } from './Data/Config';

function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main: '#002277'
      },
      secondary:{
        main: '#ffffff'
      }
    },
    typography:{
      fontFamily: 'Quicksand',
      fontSize: '1em'
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none', // This removes the uppercase transformation
          },
        },
      },
    },
  });

  const [appClass,setAppClass] = useState(SELECT_HOME);

  return (
    <ThemeProvider theme={theme}>
    <BackgroundContext.Provider value={{
      value: appClass,
      setValue: setAppClass
    }
      }>
    <div className={appClass == SELECT_HOME ? classes.AppWithHomeBackground : classes.AppWithPopupBackground}>
       <Header />
      <HomePage />   
        {/* <Xpage />   */}
    </div>
    </BackgroundContext.Provider>
    </ThemeProvider>
  );
}

export default App;
