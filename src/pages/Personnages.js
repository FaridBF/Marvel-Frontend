import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';
import Header from '../components/Header';
import '../styles/loading_spinner.css';

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response =
          await axios.get(`https://marvel-backend.herokuapp.com/comics
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

  return isLoading === true ? (
    <div class='animation'>
      <span class='loader loader_spinner'></span>
    </div>
  ) : (
    <div>
      <Header />

      {data.map((element, index) => {
        return <Card key={index} comic={element} />;
      })}
    </div>
  );
};

export default Home;
