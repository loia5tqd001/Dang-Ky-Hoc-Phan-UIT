import routes from 'data/routes';
import { Link } from 'react-router-dom';

function NeedStep1(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Có vẻ như bạn chưa chọn file excel ở bước 1</h2>
      <Link to={routes._1ChonFileExcel.path}>Về bước 1</Link>
    </div>
  );
}

export default NeedStep1;
