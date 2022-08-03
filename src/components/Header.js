import { NavLink, Link, useLocation } from 'react-router-dom';
import '../styles/header.css';
import logo_marvel from '../assets/marvel_logo.png';

const Header = () => {
  const location = useLocation();
  const currentURLPathname = location.pathname;

  return (
    <>
      <div className='header-container'>
        <div className='header-position'>
          <Link to='/personnages'>
            <img className='header-logo' src={logo_marvel} alt='logo_marvel' />
          </Link>
          <nav>
            <ul>
              {currentURLPathname === '/' && (
                <>
                  <NavLink to='/comics'>
                    <li>Comics</li>
                  </NavLink>
                  <NavLink to='/personnages'>
                    <li>Personnages</li>
                  </NavLink>
                  <NavLink to='/favoris'>
                    <li>Favoris</li>
                  </NavLink>
                </>
              )}
              {currentURLPathname === '/personnages' && (
                <>
                  <NavLink to='/comics'>
                    <li>Comics</li>
                  </NavLink>
                  <NavLink to='/favoris'>
                    <li>Favoris</li>
                  </NavLink>
                </>
              )}
              {currentURLPathname === '/favoris' && (
                <>
                  <NavLink to='/comics'>
                    <li>Comics</li>
                  </NavLink>
                  <NavLink to='/personnages'>
                    <li>Personnages</li>
                  </NavLink>
                </>
              )}
              {currentURLPathname === '/comics' && (
                <>
                  <NavLink to='/favoris'>
                    <li>Favoris</li>
                  </NavLink>
                  <NavLink to='/personnages'>
                    <li>Personnages</li>
                  </NavLink>
                </>
              )}
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
