import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <a className="footer__logo-link" href="/" aria-label="JARIO Spanish Academy home">
            <img
              className="footer__logo"
              src="/Logo_JARIO.png"
              alt="JARIO Spanish Academy"
              loading="lazy"
            />
          </a>
          <p>
            Online Spanish lessons with Colombian flavor. Learn naturally,
            speak confidently and enjoy every step.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Explore">
          <h2>Explore</h2>
          <a href="/#about-heading">About the academy</a>
          <a href="/#classes-heading">Classes</a>
          <a href="/#pricing-heading">Pricing &amp; packages</a>
          <a href="/#youtube-heading">YouTube lessons</a>
          <Link to="/vocabulary">Vocabulary</Link>
        </nav>

        <nav className="footer__nav" aria-label="Get started">
          <h2>Get started</h2>
          <a href="/#booking">Book a free trial</a>
          <a href="/#level-heading">Find your level</a>
          <a href="/#contact-heading">Contact us</a>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Spanish Academy JARIO. All rights reserved.</p>
        <a href="https://www.youtube.com/@Linguatoons" target="_blank" rel="noreferrer">
          LINGUATOONS on YouTube ↗
        </a>
      </div>
    </footer>
  )
}

export default Footer
