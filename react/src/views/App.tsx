import LinearProgress from '@mui/material/LinearProgress';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, useLocation } from 'react-router-dom';
import { Theme } from '@mui/material';
import { ROUTES } from '../constants';
import { selectFinalDataTkb, useDrawerStore, useTkbStore } from '../zus';
import ErrorBoundary from './components/ErrorBoundary';
import LeftDrawer from './components/LeftDrawer';
import NeedStep1Warning from './components/NeedStep1';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const ChonFileExcel = lazy(() => import('./1ChonFileExcel'));
const XepLop = lazy(() => import('./2XepLop'));
const KetQua = lazy(() => import('./3KetQua'));

type PersistedRouteProps = {
  path: string;
  component: React.ComponentType;
};

/**
 * to show/hide only, instead of mount/unmount the component when route changes
 * for a smoother UX
 */
function PersistedRoute(props: PersistedRouteProps) {
  const location = useLocation();
  const match = location.pathname === props.path;
  return (
    <div hidden={!match} style={{ width: '100%' }}>
      <props.component />
    </div>
  );
}

function FallbackRoute() {
  const location = useLocation();
  const hasAnyMatch = Object.values(ROUTES).some((route) => route.path === location.pathname);
  return hasAnyMatch ? null : <Redirect to={ROUTES._1ChonFileExcel.path} />;
}

function App() {
  const isDrawerOpen = useDrawerStore((s) => s.isDrawerOpen);
  const classes = useStyles({ isDrawerOpen });
  const dataTkb = useTkbStore(selectFinalDataTkb);

  return (
    <div className={classes.root}>
      <ErrorBoundary>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route component={ScrollToTop} />
          <LeftDrawer />
          <div
            className={clsx(classes.content, {
              [classes.contentShift]: isDrawerOpen,
            })}
          >
            <Suspense fallback={<LinearProgress />}>
              <Route
                path="/b1e7x6f66mkd"
                component={() => {
                  window.location.href = 'https://b1e7x6f66mkd.ddns.dataunlocker.com';
                  return null;
                }}
              />
              <PersistedRoute path={ROUTES._1ChonFileExcel.path} component={ChonFileExcel} />
              <PersistedRoute path={ROUTES._2XepLop.path} component={dataTkb.length ? XepLop : NeedStep1Warning} />
              <PersistedRoute path={ROUTES._3KetQua.path} component={dataTkb.length ? KetQua : NeedStep1Warning} />
              <FallbackRoute />
            </Suspense>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;

// styles below:
const drawerWidth = 190;

type StyleProps = {
  isDrawerOpen: boolean;
};
const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    display: 'flex',
    '& > canvas': {
      position: 'fixed !important',
    },
  },
  content: {
    flexGrow: 1,
    padding: (props) => theme.spacing(props.isDrawerOpen ? 3 : 1),
    background: '#f4f9f2ee',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -(drawerWidth - 50),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
