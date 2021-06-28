import React, {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [uname, setUName] = useState("");
    const [pword, setPWord] = useState("");
    const [netid, setNetId] = useState("");

  return (
    <>
      <Header />
      <div className="home">
        <h2 className="header-text">Login page </h2>
        <div className="block">
          <br />
            <form>
                <label for="email">Email:</label>
                <input className="input" type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}/><br/>
                <label for="netid">Net ID:</label>
                <input className="input" type="text" value={netid} placeholder="Net ID" onChange={e => setNetId(e.target.value)}/><br/>
                <label for="uname">Username:</label>
                <input className="input" type="text" value={uname} placeholder="Username" onChange={e => setUName(e.target.value)}/><br/>
                <label for="pword">Password:</label>
                <input className="input" type="text" value={pword} placeholder="Password" onChange={e => setPWord(e.target.value)}/><br/>
                <input className="input" type="submit" value="Submit"/>
            </form>
            <p>Not Registered? <a href="/Signup">Sign Up</a></p>
        </div>
      </div>
    </>
  )
}

export default Login
