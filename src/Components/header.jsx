import { NavLink } from 'react-router-dom';


const Header = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>

    <ul className="nav-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quote">Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
