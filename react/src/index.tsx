import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
// redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux';
// mui
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import lightBlue from '@material-ui/core/colors/lightBlue';
// notistack
import { SnackbarProvider } from 'notistack';
// ag-grid
import 'ag-grid-enterprise/dist/styles/ag-grid.css';
import 'ag-grid-enterprise/dist/styles/ag-theme-alpine.css';
import { LicenseManager } from 'ag-grid-enterprise';

LicenseManager.setLicenseKey('I_<3_SCHOOL_NDEwMjMzMzIwMDAwMA==afc05c982fa05a2578eb9cab60c42d78');

// color: https://material-ui.com/customization/color/#color
// theming: https://material-ui.com/customization/theming/
// global css: https://material-ui.com/customization/globals/
const theme = createTheme({
  typography: {
    fontFamily: `"Montserrat","Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    primary: { main: lightBlue[800] },
    secondary: { main: lightBlue[500] },
  },
});

// TODO: read this: https://material-ui.com/customization/globals/#global-css
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </SnackbarProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
