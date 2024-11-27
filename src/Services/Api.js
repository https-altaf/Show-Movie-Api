const API_KEY="8e493e92824f6d3dd82da626fb1c0d9b";
const BASE_URL="https://api.themoviedb.org/3/";


// In Api.js
export const fetchPopularMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const result = await response.json();
      console.log("Popular Movies:", result); // Log the result to check the structure
      return result.results; // Return the "results" array
    } catch (error) {
      console.log("Error fetching popular movies:", error);
      return []; // Return an empty array in case of error
    }
  };
  