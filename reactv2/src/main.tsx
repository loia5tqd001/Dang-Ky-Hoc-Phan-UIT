import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router';
import { useEffect } from 'react';

// Create a root route
const rootRoute = new RootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <div>
        <Link to='/1'>1. Chon file Excel</Link>
      </div>
      <div>
        <Link to='/2'>2. Xep lop</Link>
      </div>
      <div>
        <Link to='/3'>3. TKB va script</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/1',
  component: About,
});

function About() {
  useEffect(() => {
    console.log('>>About');
    return () => {
      console.log('>>About unmount');
    };
  }, []);
  return <div>Hello from About!</div>;
}

const about2Route = new Route({
  getParentRoute: () => rootRoute,
  path: '/2',
  component: About2,
});

function About2() {
  useEffect(() => {
    console.log('>>About2');
    return () => {
      console.log('>>About2 unmount');
    };
  }, []);
  return <div>Hello from About2!</div>;
}

const about3Route = new Route({
  getParentRoute: () => rootRoute,
  path: '/3',
  component: About3,
});

function About3() {
  useEffect(() => {
    console.log('>>About3');
    return () => {
      console.log('>>About3 unmount');
    };
  }, []);
  return <div>Hello from About3!</div>;
}

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  about2Route,
  about3Route,
]);

// Create the router using your route tree
const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render our app!
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
