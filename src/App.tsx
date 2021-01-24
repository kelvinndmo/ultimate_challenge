import React, { FC } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import WidgetBuilder from './views';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1098f7',
    },
    secondary: {
      main: '#000103',
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          paddingTop: '30px',
        }}
      >
        <WidgetBuilder />
      </div>
    </ThemeProvider>
  );
};

export default App;
