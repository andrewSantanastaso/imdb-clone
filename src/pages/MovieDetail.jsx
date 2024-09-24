import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = "5b8cdfdd";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [id]);
  if (!movie) return <h1>Loading...</h1>;

  return (
    <>
      <Nav />
      <div className="detail-container">
        <div className="movie-detail">
          <img src={movie.Poster} alt={movie.Title} />
          <h1 className="title">{movie.Title}</h1>
          <div className="detail-textbox">
            <p>{movie.Plot}</p>
            <hr />
            <p>
              <span>
                <strong>Director:</strong>
              </span>{" "}
              {movie.Director}
            </p>
            <hr />
            <p>
              <span>
                <strong>Cast:</strong>
              </span>{" "}
              {movie.Actors}
            </p>
            <hr />
            <p>
              <span>
                <strong>Genre:</strong>
              </span>{" "}
              {movie.Genre}
            </p>
            <hr />
            <p>
              <span>
                <strong>Year:</strong>
              </span>{" "}
              {movie.Year}
            </p>
          </div>
        </div>
      </div>
      <Link to={"/"} searchTerm={movie.name}>
        Back to Results
      </Link>
    </>
  );
};

export default MovieDetail;
