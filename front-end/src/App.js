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
import Navbar from './js/components/NavBar.js'

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
          <Navbar />
          <Switch>
            <Route path="/Data">
              <Data />
            </Route>
            <Route path="/Visualize">
              <Visualize />
            </Route>
            <Route path="/Questions">
              <Questions />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            <Route path="/SampleDataUse">
              <SampleDataUse />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
