import React from "react";
import { useFavorites } from "../../Context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const { addToFavorites } = useFavorites();

  return (
    <div className="movie-card bg-gray-800 text-white p-2 rounded-lg shadow-md">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </div>

      <div className="p-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold">{movie.title}</h3>
          <button
            className="favorite-btn text-lg"
            
            onClick={() => addToFavorites(movie)}
          
          >
            🤍
          </button>
        </div>
        <p className="mt-1 text-xs text-gray-400">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
