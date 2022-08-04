import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comics from './pages/Comics';
import Favoris from './pages/Favoris';
import Characters from './pages/Characters';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/characters' element={<Characters />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/favoris' element={<Favoris />} />
        <Route path='*' element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
