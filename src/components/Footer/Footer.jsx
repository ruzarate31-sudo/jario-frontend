import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  const home = import.meta.env.BASE_URL

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <Link className="footer__logo-link" to="/" aria-label="JARIO Spanish Academy home">
            <img
              className="footer__logo"
              src={`${home}Logo_JARIO.png`}
              alt="JARIO Spanish Academy"
              loading="lazy"
            />
          </Link>
          <p>
            Online Spanish lessons with Colombian flavor. Learn naturally,
            speak confidently and enjoy every step.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Explore">
          <h2>Explore</h2>
          <a href={`${home}#about-heading`}>About the academy</a>
          <a href={`${home}#classes-heading`}>Classes</a>
          <a href={`${home}#pricing-heading`}>Pricing &amp; packages</a>
          <a href={`${home}#youtube-heading`}>YouTube lessons</a>
          <Link to="/vocabulary">Vocabulary</Link>
        </nav>

        <nav className="footer__nav" aria-label="Get started">
          <h2>Get started</h2>
          <a href={`${home}#booking`}>Book a free trial</a>
          <a href={`${home}#level-heading`}>Find your level</a>
          <a href={`${home}#contact-heading`}>Contact us</a>
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
