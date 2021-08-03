import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

class ErrorBoundary extends React.Component {
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
