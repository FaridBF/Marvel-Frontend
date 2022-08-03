import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comics from './pages/Comics';
import Personnages from './pages/Personnages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/personnages' element={<Personnages />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='*' element={<Personnages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
