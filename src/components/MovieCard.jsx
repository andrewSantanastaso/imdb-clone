import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card-container">
      <div className="movie-card">
        <Link to={`/movie/${movie.imdbID}`}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="poster-thumbnail"
          />
          <div className="Movie-info">
            <h3>{movie.Title}</h3>
          </div>
        </Link>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
