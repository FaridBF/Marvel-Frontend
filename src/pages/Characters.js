import { useState, useEffect } from 'react';
import axios from 'axios';

// import Pagination from '../components/Pagination';
import Card from '../components/Card';
import Header from '../components/Header';
import '../styles/loading_spinner.css';
import '../styles/pagination.css';

const Characters = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');

  const [page, setPage] = useState(1);

  const fetchDataWithInput = async (input) => {
    try {
      const response =
        await axios.get(`https://marvel-backend.herokuapp.com/characters?name=${input}
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
      const fetchDataPerPage = async () => {
        let skipData = (page - 1) * 100;
        // const response =
        //   axios.get(`https://marvel-backend.herokuapp.com/characters?name=${input}&limit=100&skip=${skip}
        // `);
        const response =
          await axios.get(`http://localhost:3000/characters?name=${input}&limit=100&skip=${skipData}
        `);
        setData(response.data.results);
        setIsLoading(false);
      };
      fetchDataPerPage();
    } catch (error) {
      alert('An error has occured while fetching data.');
      console.log(error.message);
    }
  }, [page]);

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
    <>
      <Header setInput={setInput} input={input} />

      {data.length === 0 ? (
        <p className='no-result-found'>No result found</p>
      ) : (
        <div className='container-card'>
          {data.map((element, index) => {
            return <Card element={element} key={index} />;
          })}
        </div>
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
    </>
  );
};

export default Characters;
