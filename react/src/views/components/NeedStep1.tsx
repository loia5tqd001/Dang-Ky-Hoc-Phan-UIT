import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants';

function NeedStep1Warning() {
  const location = useLocation();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Có vẻ như bạn chưa chọn file excel ở bước 1</h2>
      <Link to={ROUTES._1ChonFileExcel.path + location.search}>Về bước 1</Link>
    </div>
  );
}

export default NeedStep1Warning;
