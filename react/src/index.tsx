import CssBaseline from '@mui/material/CssBaseline';
import { lightBlue } from '@mui/material/colors';
import { StyledEngineProvider, Theme, ThemeProvider, adaptV4Theme, createTheme } from '@mui/material/styles';
import { LicenseManager } from 'ag-grid-enterprise';
import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga4';

import 'ag-grid-enterprise/styles/ag-grid.css';
import 'ag-grid-enterprise/styles/ag-theme-alpine.css';
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
ReactGA.initialize('G-HK94GQMRY2', {
  testMode: process.env.NODE_ENV === 'development',
});

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
  <SnackbarProvider>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </SnackbarProvider>,
  document.getElementById('root'),
);
