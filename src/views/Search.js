import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const apiKey = '90f82ceabeea60d9c0aaf19ec9b08fc0';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    const response = await axios.get(url);
    setMovies(response.data.results);
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} />
            <p>{movie.title} ({movie.release_date})</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export {Search};