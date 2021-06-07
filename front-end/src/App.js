import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home.js'

require('dotenv').config()

export const AuthContext = React.createContext()

const App = () => {
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

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          loggedInUser,
          setLoggedInUser: setUser,
        }}
      >
        <Router>
         
          <Switch>
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
