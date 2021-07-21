import './css/App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './js/pages/Home.js'
import Data from './js/pages/Data.js'
import Visualize from './js/pages/Visualize.js'
import Questions from './js/pages/Questions.js'
import Profile from './js/pages/Profile.js'
import Login from './js/pages/Login.js'
import Signup from './js/pages/Signup.js'
import SampleDataUse from './js/pages/SampleDataUse.js'
import Dashboard from './js/pages/Dashboard'

import LayoutWrapper from './js/components/LayoutWrapper'
require('dotenv').config()

export const AuthContext = React.createContext()

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
    <div className="App">
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
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/data" component={Data} />
              <Route path="/visualize" component={Visualize} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/SampleDataUse" component={SampleDataUse} />
              <Route path="/questions" component={Questions} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </LayoutWrapper>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
