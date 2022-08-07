import { Link, useLocation } from 'react-router-dom';

import '../styles/card.css';
import avatar_default from '../assets/avatar.jpg';

const Card = ({ element, favorites, setFavorites }) => {
  const location = useLocation();
  const currentURLPathname = location.pathname;

  const addToFavorites = (element) => {
    // Vérification si objet est déjà dans les favoris
    const isAlreadyInFavorites = favorites.some(
      (favorite) => favorite._id === element._id
    );
    // Si cet objet n'a jamais été ajouté aux favoris
    if (!isAlreadyInFavorites) {
      const newFavorite = {
        _id: element._id,
        name: element.name ? element.name : element.title,
        description: element.description,
        thumbnail: {
          path: element.thumbnail.path,
          extension: element.thumbnail.extension
        }
      };
      setFavorites([newFavorite, ...favorites]);
    } else {
      alert("You've already added this item to your favorites.");
    }
  };

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
          {currentURLPathname === '/characters' ||
          currentURLPathname === '/favorites'
            ? element.name
            : currentURLPathname === '/comics'
            ? element.title
            : ''}
        </h2>
        <h3 className='card-description'>{element.description}</h3>
      </div>
      {currentURLPathname !== '/favorites' && (
        <div onClick={() => addToFavorites(element)} className='btn'>
          Add to Favorites
        </div>
      )}
    </div>
  );
};

export default Card;
