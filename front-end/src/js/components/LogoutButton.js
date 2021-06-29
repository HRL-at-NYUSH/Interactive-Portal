import React from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../App.js'
import '../../css/components/LogoutButton.css'
import { GoogleLogout } from 'react-google-login';

const clientId = "838596502010-0p0p11r3amea5qojgot7j52n2pb4saf7.apps.googleusercontent.com";

function LogoutButton() {
  const onSuccess = (res) => {
    alert('[Logout Successful]');
  }

  return (
    <>
      <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
    </>
  )
}

// function LogoutButton() {
//   /*
//   const { setLoggedInUser } = React.useContext(AuthContext)
//   const history = useHistory()

//   const handleClick = (e) => {
//     e.preventDefault()
//     setLoggedInUser(null)
//     history.push('/')
//   }
// */
//   return (
//     <button /*onClick={handleClick}*/ className="logoutButton">
//       {' '}
//       Logout{' '}
//     </button>
//   )
// }

export default LogoutButton
