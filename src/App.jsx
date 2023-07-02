import { Link, useLocation } from 'react-router-dom'
import './App.css';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/home' || location.pathname === '/' || location.pathname === '/travel-bucket-list';

  return (
    <div className='flex-container'>
      <h1 className='flex-item-left'>Hello Suthan, this is your travel bucket list</h1>
      <div className='flex-item-right'>
        {!isHome && <Link className='btn btn-lg btn-dark' to="/home">View Travel Plans</Link>}
        {isHome && <Link className='btn btn-lg btn-dark' to="/addplan">Add Travel Plan</Link>}
      </div>
    </div>
  );
}

export default App;
