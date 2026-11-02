import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/" aria-label="JARIO Spanish Academy home">
        <img
          className="header__logo-image"
          src={`${import.meta.env.BASE_URL}Logo_JARIO.png`}
          alt="JARIO Spanish Academy — Spanish with Colombian flavor"
        />
      </Link>
      <Navigation />
    </header>
  )
}

export default Header
