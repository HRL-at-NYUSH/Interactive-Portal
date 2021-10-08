import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { LayoutWrapper } from '@components'

import {
  Home,
  Data,
  Visualize,
  Questions,
  Resources,
  Profile,
  SampleDataUse,
  GraphDisplay,
  Dashboard,
} from '@pages'

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
              <Route path="/sample-data-use" component={SampleDataUse} />
              <Route path="/Questions" component={Questions} />
              <Route path="/Resources" component={Resources} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/graphDisplay" component={GraphDisplay} />
            </Switch>
          </LayoutWrapper>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
