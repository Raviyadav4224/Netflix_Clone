import './App.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import TVShows from './components/TVShows';
import Login from './components/Login';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tvshows' element={<TVShows/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
