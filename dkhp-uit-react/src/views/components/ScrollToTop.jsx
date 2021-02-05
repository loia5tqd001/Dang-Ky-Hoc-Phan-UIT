import { useHistory } from 'react-router-dom';

function ScrollToTop(props) {
  const history = useHistory();

  if (history.action === 'PUSH') {
    window.scrollTo(0, 0);
  }

  return null;
}

export default ScrollToTop;
