import React from "react";
import { useFavorites } from "../../Context/FavoritesContext";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-3xl text-white mb-6">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div
              key={movie.id}
              className="movie-card bg-gray-800 text-white p-2 rounded-lg shadow-md"
            >
              <div className="movie-poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-2">
                <h3 className="text-sm font-semibold">{movie.title}</h3>
                <p className="text-xs text-gray-400">{movie.release_date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No favorites yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
