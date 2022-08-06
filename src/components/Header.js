import { NavLink, Link, useLocation } from 'react-router-dom';

import '../styles/header.css';
import logo_marvel from '../assets/marvel_logo.png';

const Header = ({ input, setInput }) => {
  const location = useLocation();
  const currentURLPathname = location.pathname;

  return (
    <>
      <div className='header-container'>
        <div className='header-position'>
          <Link to='/'>
            <img className='header-logo' src={logo_marvel} alt='logo_marvel' />
          </Link>
          <nav>
            <ul>
              {currentURLPathname === '/' && (
                <>
                  <NavLink to='/comics'>
                    <li>Comics</li>
                  </NavLink>
                  <NavLink to='/characters'>
                    <li>Characters</li>
                  </NavLink>
                  <NavLink to='/favorites'>
                    <li>Favorites</li>
                  </NavLink>
                </>
              )}
              {currentURLPathname === '/characters' && (
                <>
                  <NavLink to='/comics'>
                    <li>Comics</li>
                  </NavLink>
                  <NavLink to='/favorites'>
                    <li>Favorites</li>
                  </NavLink>
                </>
              )}
              {currentURLPathname === '/favorites' && (
                <>
                  <NavLink to='/comics'>
                    <li>Comics</li>
                  </NavLink>
                  <NavLink to='/characters'>
                    <li>Characters</li>
                  </NavLink>
                </>
              )}
              {currentURLPathname === '/comics' && (
                <>
                  <NavLink to='/favorites'>
                    <li>Favorites</li>
                  </NavLink>
                  <NavLink to='/characters'>
                    <li>Characters</li>
                  </NavLink>
                </>
              )}
            </ul>
          </nav>

          {currentURLPathname === '/' ? (
            ''
          ) : (
            <div className='search-container'>
              <div>
                {currentURLPathname === '/comics' ? (
                  <input
                    type='text'
                    className='search-input'
                    value={input}
                    onChange={(event) => {
                      setInput(event.target.value);
                    }}
                    placeholder='Find your favorite comic'
                  />
                ) : (
                  <input
                    type='text'
                    className='search-input'
                    value={input}
                    onChange={(event) => {
                      setInput(event.target.value);
                    }}
                    placeholder='
                  Find your favorite character'
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
