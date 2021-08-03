import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from 'data/routes';
// mui
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
// views
import LeftDrawer from './components/LeftDrawer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
const ChonFileExcel = lazy(() => import('./1ChonFileExcel'));
const XepLop = lazy(() => import('./2XepLop'));
const KetQua = lazy(() => import('./3KetQua'));
const GiaoDienDKHP = lazy(() => import('./4GiaoDienDKHP'));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ErrorBoundary>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route component={ScrollToTop} />
          <LeftDrawer />
          <div className={classes.content}>
            <Suspense fallback={<LinearProgress />}>
              <Switch>
                <Route path={routes._1ChonFileExcel.path} component={ChonFileExcel} exact />
                <Route path={routes._2XepLop.path} component={XepLop} exact />
                <Route path={routes._3KetQua.path} component={KetQua} exact />
                <Route path={routes._4GiaoDienDKHP.path} component={GiaoDienDKHP} exact />
                <Route path={'*'} render={() => <Redirect to={routes._2XepLop.path} />} />
              </Switch>
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
    background: '#f4f9f2ee',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
}));
