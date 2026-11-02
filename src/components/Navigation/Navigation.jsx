import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const home = import.meta.env.BASE_URL

  return (
    <nav className="navigation" aria-label="Main navigation">
      <Link className="navigation__link" to="/">Home</Link>
      <a className="navigation__link" href={`${home}#about-heading`}>Academy</a>
      <a className="navigation__link" href={`${home}#classes-heading`}>Classes</a>
      <Link className="navigation__link" to="/vocabulary">Vocabulary</Link>
      <a className="navigation__link" href={`${home}#pricing-heading`}>Pricing</a>
      <a className="navigation__link" href={`${home}#youtube-heading`}>YouTube</a>
      <a className="navigation__link" href={`${home}#level-heading`}>Find your level</a>
      <a className="navigation__link" href={`${home}#contact-heading`}>Contact</a>
      <a className="navigation__trial" href={`${home}#booking`}>Book a free trial</a>
    </nav>
  )
}

export default Navigation
