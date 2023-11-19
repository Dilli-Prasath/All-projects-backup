import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';

import Admin from './pages/Admin';
import Customer from './pages/Customer';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>

                <Route exact path='/admin' element={< Admin />}></Route>
				        <Route exact path='/customer' element={< Customer />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
