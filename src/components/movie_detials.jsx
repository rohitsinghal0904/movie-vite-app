const MovieDetail = ({ movie }) => (
  <div className="details">
    <h2>{movie.Title} ({movie.Year})</h2>
    <p><strong>Plot:</strong> {movie.Plot}</p>
    <p><strong>Actors:</strong> {movie.Actors}</p>
    <p><strong>Genre:</strong> {movie.Genre}</p>
    <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
  </div>
);

export default MovieDetail;
