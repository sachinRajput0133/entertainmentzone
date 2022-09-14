
import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
// import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from './components/Pages/Trending/Trending.js'
import Movies from './components/Pages/Movies/Movies.js'
import Series from './components/Pages/Series/Series.js'
import Search from './components/Pages/Search/Search.js'
function App() {
  return (
    
    <BrowserRouter>
      <Header/>
    <div className="app">
      <Container>
             <Routes>
               <Route path='/' element={<Trending/>} />
               <Route path='/movies' element={<Movies/>} />
               <Route path='/series' element={<Series/>} />
               <Route path='/search' element={<Search/>} />


             </Routes>

      </Container>
    </div>
<SimpleBottomNavigation/>
    </BrowserRouter>
    
    
  );
}

export default App;
