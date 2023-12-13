import { useHistory } from 'react-router-dom';

function ScrollToTop() {
  const history = useHistory();

  if (history.action === 'PUSH') {
    window.scrollTo(0, 0);
  }

  return null;
}

export default ScrollToTop;
