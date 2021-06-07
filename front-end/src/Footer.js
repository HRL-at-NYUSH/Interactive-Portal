import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p id="trakt-power">Powered by Trakt</p>
        <Link to="/terms-of-service" className="footer-links">
          Terms of Service
        </Link>
        <Link to="/meet-the-team" className="footer-links">
          Meet the Team
        </Link>
      </div>
    </footer>
  )
}

export default Footer
