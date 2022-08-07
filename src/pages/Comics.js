import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';
import Header from '../components/Header';
import '../styles/loading_spinner.css';

const Comics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //gestion de la barre de recherche
  const [input, setInput] = useState('');
  //gestion de la pagination
  const [page, setPage] = useState(1);
  // gestion des favoris
  const favoritesInLocalStorage = JSON.parse(localStorage.getItem('favorites'));
  const [favorites, setFavorites] = useState([]);

  const fetchData = async (input) => {
    try {
      let skipData = (page - 1) * 100;
      const response =
        await axios.get(`https://marvel-backend.herokuapp.com/comics?title=${input}&limit=100&skip=${skipData}
      `);
      setData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      alert('An error has occured while fetching data.');
      console.log(error.message);
    }
  };

  useEffect(() => {
    try {
      fetchData(input);
      if (favoritesInLocalStorage) {
        setFavorites(favoritesInLocalStorage);
      }
    } catch (error) {
      console.log(error.message);
    }
    // au chargement de Comics, si favoris existent ds localStorage,
    // les récupérer dans tableau favorites
  }, [page, input]);

  useEffect(() => {
    // Mettre à jour le localStorage, dès que le tableau 'favorites' en local est màj
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return isLoading === true ? (
    <div className='animation'>
      <span className='loader loader_spinner'></span>
    </div>
  ) : (
    <div>
      <Header setInput={setInput} input={input} />

      {data.length === 0 ? (
        <p className='no-result-found'>No result found</p>
      ) : (
        <>
          <div className='container-card'>
            {data.map((element, index) => {
              return (
                <Card
                  element={element}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  key={index}
                />
              );
            })}
          </div>
        </>
      )}
      <div className='pagination-row'>
        <button
          className='page-item'
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          -
        </button>
        <p className='numerotation-pages'>{page}</p>
        <button
          className='page-item'
          onClick={() => setPage(page + 1)}
          disabled={data.length < 100}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Comics;
