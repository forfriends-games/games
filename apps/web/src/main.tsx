import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';

import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <StylesProvider injectFirst>
      <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
