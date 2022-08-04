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
      // const response = await axios.get(
      //   `https://marvel-backend.herokuapp.com/characters?name=${input}`
      // );
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
        //   const response =
        //     await axios.get(`https://marvel-backend.herokuapp.com/characters
        // `);
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

      {data.map((element, index) => {
        return <Card key={index} element={element} />;
      })}
    </div>
  );
};

export default Comics;
