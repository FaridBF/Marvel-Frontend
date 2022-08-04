import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';
import Header from '../components/Header';
import '../styles/loading_spinner.css';

const Comics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');

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
        console.log(response.data.results);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
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
              return <Card element={element} key={index} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Comics;
