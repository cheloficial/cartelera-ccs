import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "90f82ceabeea60d9c0aaf19ec9b08fc0";
const API_URL = "https://api.themoviedb.org/3/";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("popular");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${API_URL}movie/${type}?api_key=${API_KEY}&page=${page}`
      );
      setMovies(response.data.results);
    };
    fetchData();
  }, [type, page]);

  const handleTypeChange = (newType) => {
    setType(newType);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <h1>{type === "popular" ? "Películas Populares" : "Películas Próximas a Estrenar"}</h1>
      <button onClick={() => handleTypeChange("popular")}>Películas Populares</button>
      <button onClick={() => handleTypeChange("upcoming")}>Películas Próximas a Estrenar</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>Popularidad: {movie.popularity}</p>
              <p>Idioma: {movie.original_language}</p>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => handlePageChange(page + 1)}>Ver Más</button>
    </div>
  );
};
export default Home;

