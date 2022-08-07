import { Link, useLocation } from 'react-router-dom';
import '../styles/card.css';
import avatar_default from '../assets/avatar.jpg';

const Card = ({ element }) => {
  const location = useLocation();
  const currentURLPathname = location.pathname;

  return (
    <div className='card'>
      {currentURLPathname === `/characters` ? (
        <Link to={`/character/${element._id}`}>
          <img
            src={
              element.thumbnail.path ===
              'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
                ? avatar_default
                : `${element.thumbnail.path}.${element.thumbnail.extension}`
            }
            alt='poster element'
          />
        </Link>
      ) : (
        <img
          src={
            element.thumbnail.path ===
            'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
              ? avatar_default
              : `${element.thumbnail.path}.${element.thumbnail.extension}`
          }
          alt='poster element'
        />
      )}
      <div className='container-title-description'>
        <h2 className='card-title'>
          {currentURLPathname === '/characters'
            ? element.name
            : currentURLPathname === '/comics'
            ? element.title
            : ''}
        </h2>
        <h3 className='card-description'>{element.description}</h3>
      </div>
      <div className='btn'>Add to Favorites</div>
    </div>
  );
};

export default Card;
