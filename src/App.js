import React from 'react';
import './App.css';
import AuthForm from './AuthForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthForm />
    </ThemeProvider>
  );
}
export default App;