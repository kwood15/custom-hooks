import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './components/search';
import { LoginForm } from './components/account/login';
import Favourites from './components/account/favourites';
import ListView from './components/ListView';
import { SearchResults } from './components/search/components/SearchResults';

function App(): ReactElement {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search-results">Search Results</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
            <li>
              <Link to="/test">Test fetch get</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Search />
          </Route>
          <Route path="/search-results">
            <SearchResults />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/test">
            <ListView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
