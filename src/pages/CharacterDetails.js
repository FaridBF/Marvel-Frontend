import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import '../styles/card.css';
import avatar_default from '../assets/avatar.jpg';

function CharacterDetails() {
  const location = useLocation();
  const currentURLPathname = location.pathname;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const characterID = currentURLPathname.split('/').pop();
  console.log(characterID);

  useEffect(() => {
    try {
      const fetchDataById = async () => {
        // const response =
        //   axios.get(`https://marvel-backend.herokuapp.com/characters?name=${input}&limit=100&skip=${skip}
        // `);
        const response =
          await axios.get(`http://localhost:3000/comics/${characterID}
          `);
        setData(response.data);
        setIsLoading(false);
      };
      fetchDataById();
    } catch (error) {
      alert('An error has occured while fetching data.');
      console.log(error.message);
    }
  }, []);

  return isLoading === true ? (
    <div className='animation'>
      <span className='loader loader_spinner'></span>
    </div>
  ) : (
    <>
      <div className='card'>
        <img
          src={
            data.thumbnail.path ===
            'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
              ? avatar_default
              : `${data.thumbnail.path}.${data.thumbnail.extension}`
          }
          alt='poster element'
        />
        <div>
          <div className='container-title-description'>
            <h2 className='card-title'>{data.name}</h2>
            <h3 className='card-description'>{data.description}</h3>
          </div>
        </div>
      </div>

      {data.comics.map((element, index) => {
        return (
          <div key={index}>
            <p>{element.title}</p>
            <img
              src={
                element.thumbnail.path ===
                'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
                  ? avatar_default
                  : `${element.thumbnail.path}.${element.thumbnail.extension}`
              }
              alt='poster element'
            />
          </div>
        );
      })}
    </>
  );
}

export default CharacterDetails;
