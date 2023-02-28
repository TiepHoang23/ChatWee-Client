import { useNavigate } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate('/');
  };
  return (
    <div className='container-notfound'>
      <div className='title'>Opp!Page Not Found.</div>
      <h1 className='heading'>404</h1>
      <p>We can't find the page you looking for. </p>
      <button className='btn-back' onClick={handleBackHome}>
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
