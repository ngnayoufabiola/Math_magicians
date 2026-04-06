import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>Math Magicians</h1>

      <button
        type="button"
        className="hamburger"
        onClick={toggleMenu}

      >
        {menuOpen ? '✖' : '☰'}
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator" onClick={closeMenu}>
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/quote" onClick={closeMenu}>
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
