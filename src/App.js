import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Science from './pages/Science';
import TheArts from './pages/TheArts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='error' element={<Error />} />
        <Route path='science' element={<Science />} />
        <Route path='thearts' element={<TheArts />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
