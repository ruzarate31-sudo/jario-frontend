import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <Link className="navigation__link" to="/">Home</Link>
      <a className="navigation__link" href="/#about-heading">Academy</a>
      <a className="navigation__link" href="/#classes-heading">Classes</a>
      <Link className="navigation__link" to="/vocabulary">Vocabulary</Link>
      <a className="navigation__link" href="/#pricing-heading">Pricing</a>
      <a className="navigation__link" href="/#youtube-heading">YouTube</a>
      <a className="navigation__link" href="/#level-heading">Find your level</a>
      <a className="navigation__link" href="/#contact-heading">Contact</a>
      <a className="navigation__trial" href="/#booking">Book a free trial</a>
    </nav>
  )
}

export default Navigation
