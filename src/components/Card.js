import '../styles/card.css';
import { useLocation } from 'react-router-dom';

const Card = ({ element }) => {
  const location = useLocation();
  const currentURLPathname = location.pathname;

  return (
    <div className='card'>
      <img
        src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
        alt='poster element'
      />
      <div className='container-title-description'>
        <h2>
          {currentURLPathname === '/characters'
            ? element.name
            : currentURLPathname === '/comics'
            ? element.title
            : ''}
        </h2>
        <h3>{element.description}</h3>
      </div>

      <div className='btn'>Ajouter aux coups de coeur</div>
    </div>
  );
};

export default Card;
