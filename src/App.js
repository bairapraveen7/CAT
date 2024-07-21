import './App.css';
import { HomePage } from './Pages/homePage';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { CustomInputRow } from './Components/Main/CustomInputRow';
import { Header } from './Components/layout/Header';
import { Xpage } from './Pages/Xpage';

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

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <Header />
      <HomePage />   */}
       <Xpage />
    </div>
    </ThemeProvider>
  );
}

export default App;
