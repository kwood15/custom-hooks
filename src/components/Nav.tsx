import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function Nav(): ReactElement {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/search-results">Results</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/basket">Basket</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/checkout">Checkout</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/favourites">Favourites</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/accounts/profile">My Profile</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/accounts/shopping-list">My Shopping List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
