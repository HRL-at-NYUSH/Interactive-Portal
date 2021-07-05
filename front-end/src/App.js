import './css/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './js/pages/home';
import Data from './js/pages/data';
import Visualize from './js/pages/visualize';
import Questions from './js/pages/questions';
import Profile from './js/pages/profile';
import Login from './js/pages/login';
import Signup from './js/pages/signup';
import SampleDataUse from './js/pages/SampleDataUse';
import Dashboard from './js/pages/dashboard';

import LayoutWrapper from './js/components/LayoutWrapper';
require('dotenv').config();

export const AuthContext = React.createContext();

const App = () => {
  /*
  const [loggedInUser, setLoggedInUser] = useState(null)

  const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setLoggedInUser(user)
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])
*/
  return (
    <div className='App'>
      <AuthContext.Provider
      /*
        value={{
          loggedInUser,
          setLoggedInUser: setUser,
        }}
        */
      >
        <Router>
          <LayoutWrapper>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/data' component={Data} />
              <Route path='/visualize' component={Visualize} />
              <Route path='/dashboard' component={Dashboard} />

              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />

              <Route path='/SampleDataUse' component={SampleDataUse} />

              <Route path='/questions' component={Questions} />
            </Switch>
          </LayoutWrapper>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
