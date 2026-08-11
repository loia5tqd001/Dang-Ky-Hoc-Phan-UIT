import LinearProgress from '@mui/material/LinearProgress';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ROUTES } from '../constants';
import { selectFinalDataTkb, useTkbStore } from '../zus';
import ErrorBoundary from './components/ErrorBoundary';
import NeedStep1Warning from './components/NeedStep1';
import ScrollToTop from './components/ScrollToTop';
import VluLayout from '../vlu/VluLayout';
import '../vlu/brand.css';
import './App.css';

const Dashboard = lazy(() => import('./Dashboard'));
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
  return hasAnyMatch ? null : <Redirect to="/" />;
}

function App() {
  const dataTkb = useTkbStore(selectFinalDataTkb);

  return (
    <ErrorBoundary>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route component={ScrollToTop} />
        <VluLayout>
          <Suspense fallback={<LinearProgress />}>
            <Route exact path="/" component={Dashboard} />
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
        </VluLayout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
