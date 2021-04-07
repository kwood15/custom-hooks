import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import asyncRouteList from './routes/asyncRouteList';
import ProtectedApp from './ProtectedApp';
import './assets/scss/main.scss';

function App(): ReactElement {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search-results">Results</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/login">Sign in/Register</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          homepage
        </Route>
        <Route path="/search-results">results</Route>
        <Route path="/basket">basket</Route>
        <Route path="/checkout">checkout</Route>
        <Route path="/login">
          <ProtectedApp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
