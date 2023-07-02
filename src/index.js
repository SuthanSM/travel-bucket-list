import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Login from './login-page/login-component/Login';
import ViewTravelPlans from './home-page/view-travel-plans-component/ViewTravelPlans';
import AddTravelPlan from './add-travel-plan-page/add-travel-plan-component/AddTravelPlan';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='container'>
      <App />
        <Routes>
          <Route path='/' element={<ViewTravelPlans />} />
          <Route path='/home' element={<ViewTravelPlans />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addplan' element={<AddTravelPlan />} />
        </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);
