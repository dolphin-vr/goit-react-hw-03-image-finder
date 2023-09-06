import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
// Supersale2023
// PRAY_FOR_UKRAINE
const theme = {
  colors: {
    background: "#efefef",
    white: '#fff',
    red: '#ff0000',
    green: '#00bb00',
    blue: "#3f51b5",
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
