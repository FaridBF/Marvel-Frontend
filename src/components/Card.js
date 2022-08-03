import '../styles/card.css';

const Card = () => {
  return (
    <div className='card'>
      <img alt='poster-characters' />
      <div className='container-title-description'>
        <h2>nom</h2>
        <h3>description</h3>
      </div>

      <div className='btn'>Ajouter aux coups de coeur</div>
    </div>
  );
};

export default Card;
