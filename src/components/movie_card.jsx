const MovieCard = ({ movie, onClick }) => (
  <div className="card" onClick={onClick}>
    <img
      src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
      alt={movie.Title}
    />
    <div className="card-body">
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  </div>
);

export default MovieCard;
