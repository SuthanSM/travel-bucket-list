import { Link, useLocation } from 'react-router-dom'
import './App.css';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/home';

  return (
    <div className='mb-3 d-flex'>
      <h1>Hello Kittuu, this is our travel bucket list</h1>
      <div className='nav'>
        {!isHome && <Link className='btn btn-lg btn-dark m-2' to="/home">View Travel Plans</Link>}
        {isHome && <Link className='btn btn-lg btn-dark m-2' to="/addplan">Add Travel Plan</Link>}
      </div>
    </div>
  );
}

export default App;
