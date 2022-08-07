import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';
import Header from '../components/Header';
import '../styles/loading_spinner.css';

const Comics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');
  // gestion des favoris
  const favoritesInStorage = JSON.parse(localStorage.getItem('favorites'));
  const [favorites, setFavorites] = useState([]);

  const fetchDataWithInput = async (input) => {
    try {
      const response =
        await axios.get(`https://marvel-backend.herokuapp.com/comics?title=${input}
      `);
      setData(response.data.results);
      console.log(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response =
          await axios.get(`https://marvel-backend.herokuapp.com/comics?title=${input}
      `);
        setData(response.data.results);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
    // au chargement de Comics, si favoris existent ds localStorage,
    // les récupérer dans tableau favorites
    if (favoritesInStorage) {
      setFavorites(favoritesInStorage);
    }
    console.log(favoritesInStorage);
  }, []);

  useEffect(() => {
    if (input.length > 0) {
      try {
        fetchDataWithInput(input);
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [input]);

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
    </div>
  );
};

export default Comics;
