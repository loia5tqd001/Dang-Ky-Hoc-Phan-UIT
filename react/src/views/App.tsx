import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import routes from 'routes';
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, useLocation } from 'react-router-dom';
import { selectFinalDataTkb } from 'redux/xepTkb/selectors';
import ErrorBoundary from './components/ErrorBoundary';
import LeftDrawer from './components/LeftDrawer';
import NeedStep1 from './components/NeedStep1';
import ScrollToTop from './components/ScrollToTop';
const ChonFileExcel = lazy(() => import('./1ChonFileExcel'));
const XepLop = lazy(() => import('./2XepLop'));
const KetQua = lazy(() => import('./3KetQua'));
const GiaoDienDKHP = lazy(() => import('./4GiaoDienDKHP'));

type MyRouteProps = {
  path: string;
  component: React.ComponentType;
  redirect?: string;
};

function MyRoute(props: MyRouteProps) {
  const location = useLocation();
  const Component = props.component;
  const display = location.pathname === props.path || props.path === '*';
  return (
    <div hidden={!display} style={props.path !== '*' ? { width: '100%' } : undefined}>
      <Component />
    </div>
  );
}

function App() {
  const classes = useStyles();
  const dataTkb = useSelector(selectFinalDataTkb);

  return (
    <div className={classes.root}>
      <ErrorBoundary>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route component={ScrollToTop} />
          <LeftDrawer />
          <div className={classes.content}>
            <Suspense fallback={<LinearProgress />}>
              <MyRoute path={routes._1ChonFileExcel.path} component={ChonFileExcel} />
              {dataTkb.length ? (
                <>
                  <MyRoute path={routes._2XepLop.path} component={XepLop} />
                  <MyRoute path={routes._3KetQua.path} component={KetQua} />
                  <MyRoute path={routes._4GiaoDienDKHP.path} component={GiaoDienDKHP} />
                </>
              ) : (
                <NeedStep1 />
              )}
              <MyRoute path={'*'} component={() => <Redirect to={routes._1ChonFileExcel.path} />} />
            </Suspense>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;

// styles below:

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > canvas': {
      position: 'fixed !important',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    background: '#f4f9f2ee',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
}));
