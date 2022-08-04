import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comics from './pages/Comics';
import Favorites from './pages/Favorites';
import Characters from './pages/Characters';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/characters' element={<Characters />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
