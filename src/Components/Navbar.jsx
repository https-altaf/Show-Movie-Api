import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">Movies</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-4">
          <Link to="/" className="text-lg hover:underline">
            Home
          </Link>
          <Link to="/Favorites" className="text-lg hover:underline">
            Favorites
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:block">
          <input
            type="text"
            placeholder="Search for movies"
            className="searchInput px-4 py-2 rounded text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4 space-y-2">
          <Link to="/" className="block text-lg hover:underline">
            Home
          </Link>
          <Link to="/Favorites" className="block text-lg hover:underline">
            Favorites
          </Link>
          <div>
            <input
              type="text"
              placeholder="Search for movies"
              className="searchInput px-4 py-2 rounded text-black w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
