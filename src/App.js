import logo from './logo.svg';
import './App.css';
import { HomePage } from './Pages/homePage';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Header } from './Components/layout/Header';
import { ClientPopup } from './Components/Main/ClientPopup';

function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main: '#002277'
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
      <Header />
      <HomePage /> 
      {/* <ExampleWithProviders /> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
