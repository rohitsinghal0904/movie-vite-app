import { useState } from 'react';
import MovieCard from './components/movie_card';
import MovieDetail from './components/movie_detials';
import './index.css';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async () => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
    const data = await res.json();
    setMovies(data.Search || []);
  };

  const fetchMovieDetail = async (id) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    const data = await res.json();
    setSelectedMovie(data);
  };

  return (
    <div className="container">
      <h1>🎬 Movie Search App</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter movie name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchMovies}>Search</button>
      </div>

      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={() => fetchMovieDetail(movie.imdbID)} />
        ))}
      </div>

      {selectedMovie && <MovieDetail movie={selectedMovie} />}
    </div>
  );
}

export default App;
