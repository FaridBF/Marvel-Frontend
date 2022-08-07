import Card from '../components/Card';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

const Favorites = () => {
  const favoritesInLocalStorage = JSON.parse(localStorage.getItem('favorites'));
  const [data, setData] = useState([]);

  useEffect(() => {
    if (favoritesInLocalStorage) {
      setData(favoritesInLocalStorage);
    }
  }, []);

  return (
    <div>
      <Header />

      {data.length === 0 ? (
        <p className='no-result-found'>No result found</p>
      ) : (
        <div className='container-card'>
          {data.map((element, index) => {
            return <Card element={element} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Favorites;
