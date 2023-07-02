import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <footer className="footer-container">
        <div className="links">
          <Link to={"https://www.instagram.com/ece_society_nit_mizoram/"} > <i class="fa-brands fa-instagram"></i></Link>
          <Link to={"https://www.facebook.com/profile.php?id=100090923980820&mibextid=ZbWKwL"} > <i class="fa-brands fa-facebook"></i> </Link>
          <Link to={"https://www.youtube.com/@ecesociety"} > <i class="fa-brands fa-youtube"></i></Link>
          <Link to={"https://www.linkedin.com/company/electronics-and-communication-society-nit-mizoram/"} > <i class="fa-brands fa-linkedin"></i></Link>
        </div>
        <p>All copyright &#169; are reserved by NIT Mizoram</p>
    </footer>
    </>
  )
}
