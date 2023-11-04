import lightBlue from '@material-ui/core/colors/lightBlue';
import CssBaseline from '@material-ui/core/CssBaseline';
// mui
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { LicenseManager } from 'ag-grid-enterprise';
// notistack
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux';
import App from './views/App';

// ag-grid
import 'ag-grid-enterprise/dist/styles/ag-grid.css';
import 'ag-grid-enterprise/dist/styles/ag-theme-alpine.css';
import { DrawerProvider } from './contexts';

LicenseManager.setLicenseKey('I_<3_SCHOOL_NDEwMjMzMzIwMDAwMA==afc05c982fa05a2578eb9cab60c42d78');

// color: https://material-ui.com/customization/color/#color
// theming: https://material-ui.com/customization/theming/
// global css: https://material-ui.com/customization/globals/
const theme = createTheme({
  typography: {
    fontFamily: `"Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji'`,
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
          <DrawerProvider>
            <CssBaseline />
            <App />
          </DrawerProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
