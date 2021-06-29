import React, {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Login.css'
import LoginButton from'../components/LoginButton'
import { GoogleLogin } from 'react-google-login';

// const clientId = "838596502010-0p0p11r3amea5qojgot7j52n2pb4saf7.apps.googleusercontent.com";

// function Login() {
//   const onSuccess = (res) => {
//     console.log('[Login Success] currentUser:', res.profileObj);
//   }

//   const onFailure = (res) => {
//     console.log('[Login Failed] res:', res);
//   }

//   return (
//     <>
//     <Header />
//       <GoogleLogin
//       clientId={clientId}
//       buttonText="Login"
//       onSuccess={onSuccess}
//       onFailure={onFailure}
//       cookiePolicy={'single_host_origin'}
//       isSignedIn={true}
//     />,
//     document.getElementById('googleButton')
//     </>
//   )
// }

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
          <LoginButton />
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
