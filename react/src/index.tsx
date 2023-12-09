import CssBaseline from '@mui/material/CssBaseline';
import { lightBlue } from '@mui/material/colors';
import { StyledEngineProvider, Theme, ThemeProvider, adaptV4Theme, createTheme } from '@mui/material/styles';
import { LicenseManager } from 'ag-grid-enterprise';
import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux';

import 'ag-grid-enterprise/styles/ag-grid.css';
import 'ag-grid-enterprise/styles/ag-theme-alpine.css';
import { DrawerProvider } from './contexts';
import App from './views/App';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

LicenseManager.setLicenseKey('I_<3_SCHOOL_NDEwMjMzMzIwMDAwMA==afc05c982fa05a2578eb9cab60c42d78');

// color: https://material-ui.com/customization/color/#color
// theming: https://material-ui.com/customization/theming/
// global css: https://material-ui.com/customization/globals/
const theme = createTheme(
  adaptV4Theme({
    typography: {
      fontFamily: `"Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji'`,
    },
    palette: {
      primary: { main: lightBlue[800] },
      secondary: { main: lightBlue[500] },
    },
  }),
);

// TODO: read this: https://material-ui.com/customization/globals/#global-css
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SnackbarProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <DrawerProvider>
              <CssBaseline />
              <App />
            </DrawerProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </SnackbarProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
