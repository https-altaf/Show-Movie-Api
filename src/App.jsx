import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favourites";
import Navbar from "./Components/Navbar";
import { FavoritesProvider } from "../Context/FavoritesContext";
import Footer from "./Components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <FavoritesProvider>
      <main className="main-content">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </FavoritesProvider>
  );
};

export default App;
