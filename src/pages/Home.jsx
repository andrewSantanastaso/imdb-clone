import MovieCard from "../components/MovieCard";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

const Home = ({ searchMovies, searchTerm, setSearchTerm, movies }) => {
  return (
    <div className="home">
      <div className="home-container">
        <Nav
          searchMovies={searchMovies}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {movies.length === 0 ? (
          <Hero
            searchMovies={searchMovies}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            movies={movies}
          />
        ) : (
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
