import { NavLink, Link } from 'react-router-dom';
import '../styles/header.css';
import logo_marvel from '../assets/marvel_logo.png';

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <div className='header-position'>
          <Link to='/personnages'>
            <img className='header-logo' src={logo_marvel} alt='logo_marvel' />
          </Link>
          <nav>
            <ul>
              <NavLink
                to='/personnages'
                className={(nav) => (nav.isActive ? 'nav-active' : '')}
              >
                <li>Accueil</li>
              </NavLink>
              <NavLink
                to='/comics'
                className={(nav) => (nav.isActive ? 'nav-active' : '')}
              >
                <li>Comics</li>
              </NavLink>
            </ul>
          </nav>
          <div className='search-container'>
            <div>
              <input type='text' className='search-input' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
