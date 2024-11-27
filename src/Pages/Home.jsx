import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { fetchPopularMovies } from "../Services/Api";

const Home = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const fetchedMovies = await fetchPopularMovies();
        if (Array.isArray(fetchedMovies)) {
          setMovies(fetchedMovies);
        } else {
          console.error("Fetched data is not an array");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-3xl text-white mb-6">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
