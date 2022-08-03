import '../styles/card.css';

const Card = ({ comic }) => {
  return (
    <div className='card'>
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt='poster comic'
      />
      <div className='container-title-description'>
        <h2>{comic.title}</h2>
        <h3>{comic.description}</h3>
      </div>

      <div className='btn'>Ajouter aux coups de coeur</div>
    </div>
  );
};

export default Card;
