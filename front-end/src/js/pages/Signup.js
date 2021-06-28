import React, {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Signup.css'

// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
// // or
// import { GoogleLogin } from 'react-google-login';


// const responseGoogle = (response) => {
//   console.log(response);
// }

// ReactDOM.render(
//   <GoogleLogin
//     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />,
//   document.getElementById('googleButton')
// );

function Signup() {
    const [email, setEmail] = useState("");
    const [uname, setUName] = useState("");
    const [pword, setPWord] = useState("");
    const [pword2, setPWord2] = useState("");
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
                <label for="pword">Confirm Password:</label>
                <input className="input" type="text" value={pword2} placeholder="Password" onChange={e => setPWord2(e.target.value)}/><br/>
                <input className="input" type="submit" value="Submit"/>
            </form>
            <p>Already Registered? <a href="/Login">Log In</a></p>
        </div>
      </div>
    </>
  )
}

export default Signup
