import { useEffect } from "react";
import MovieDetail from "../pages/MovieDetail";
import MovieCard from "./MovieCard";

const theGodfather = {
  Title: "The Godfather",
  Year: "1972",
  imdbID: "tt0068646",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
};
const goodfellas = {
  Title: "Goodfellas",
  Year: "1990",
  imdbID: "tt0099685",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
};

const Hero = ({
  movies,
  searchTerm,
  setSearchTerm,
  searchMovies,
  setMovies,
}) => {
  return (
    <div className="no-movies-container">
      <h2 className="no-movies">Welcome to The Movie Library</h2>
      <h4 className="no-movies">Search for all movies above...</h4>
      <h5 className="no-movies">Or check out these classics below</h5>
      <section className="home-movies-default">
        <MovieCard movie={theGodfather} />
        <MovieCard movie={goodfellas} />
      </section>
    </div>
  );
};

export default Hero;
