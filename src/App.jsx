import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const apiKey = "5b8cdfdd";

  const searchMovies = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home
              searchMovies={searchMovies}
              setTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              movies={movies}
              setMovies={setMovies}
            />
          </>
        }
      />
      <Route
        path="/movie/:id"
        element={
          <MovieDetail
            searchMovies={searchMovies}
            setTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            movies={movies}
          />
        }
      />
    </Routes>
  );
}

export default App;
