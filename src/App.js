import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comics from './pages/Comics';
import Favorites from './pages/Favorites';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Video from './components/Video';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/characters' element={<Characters />} />
        <Route path='/character/:id' element={<CharacterDetails />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
