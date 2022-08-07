import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import '../styles/card.css';
import '../styles/characterDetails.css';

import Header from '../components/Header';

import avatar_default from '../assets/avatar.jpg';

function CharacterDetails() {
  const location = useLocation();
  const currentURLPathname = location.pathname;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const characterID = currentURLPathname.split('/').pop();

  useEffect(() => {
    try {
      const fetchDataById = async () => {
        const response =
          await axios.get(`https://marvel-backend.herokuapp.com/comics/${characterID}
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
      <Header />
      <div className='container'>
        <div className='left-container'>
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
        </div>
        <div className='middle-container'>
          {data.comics.map((element, index) => {
            return (
              <>
                <div key={index}>
                  <img
                    className='img-middle-container'
                    src={
                      element.thumbnail.path ===
                      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
                        ? avatar_default
                        : `${element.thumbnail.path}.${element.thumbnail.extension}`
                    }
                    alt='poster element'
                  />
                </div>
              </>
            );
          })}
        </div>
        {data.comics.length > 0 && (
          <div className='right-container'>
            <h3 className='description-container'>
              List of comics in which this character is present :
            </h3>
            {data.comics.map((element, index) => {
              return <p key={index}>{element.title}</p>;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default CharacterDetails;
