import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

class ErrorBoundary extends React.Component<{ fallback?: React.ReactDOM }, { hasErrored: boolean }> {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return this.props.fallback ?? <LinearProgress />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
