import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import { LoginPage } from './components/LoginPage';
import {getUser} from './features/user/userSlice';
import HomePage from './components/HomePage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  const user = useSelector(getUser);
  return (
    <BrowserRouter>
     <Switch />
      <div className="app">
        {!user ? <LoginPage />
        : <Route exact path={['/', '/:type/:id']} component={HomePage} />}
      </div>
    </BrowserRouter>
  );
}

export default App;



