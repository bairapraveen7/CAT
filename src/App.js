import logo from './logo.svg';
import './App.css';
import { HomePage } from './Pages/homePage';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Header } from './Components/layout/Header';

function App() {
  const theme = createTheme({
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
    </div>
    </ThemeProvider>
  );
}

export default App;
