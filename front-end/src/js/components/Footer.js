import React from 'react'
import '../../css/components/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Link to="/questions" className="footer-links">
          Frequently Asked Questions
        </Link>
        <Link to="/" className="footer-links">
          About Project
        </Link>
      </div>
    </footer>
  )
}

export default Footer
