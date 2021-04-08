import { ReactElement, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifyGreetings } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsExports from './aws-exports';

import { Homepage } from './components/Homepage';
import Favourites from './components/account/favourites';
import { SearchResults } from './components/search/components/SearchResults';

// import asyncRouteList from './routes/asyncRouteList';

import './assets/scss/main.scss';

Amplify.configure(awsExports);

function App(): ReactElement {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      if (nextAuthState === AuthState.SignedIn) {
        console.log('signed in!');
        console.log('user data: ', authData);
      }
      if (!authData) {
        console.log('not signed in');
      }
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

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
            <Link to="/favourites">Favourites</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>

      {authState === AuthState.SignedIn && user ? (
        <AmplifyGreetings username={user.username}></AmplifyGreetings>
      ) : (
        <Route path="/login">
          <AmplifyAuthenticator />
        </Route>
      )}

      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/search-results">
          <SearchResults />
        </Route>
        <Route path="/basket">basket</Route>
        <Route path="/checkout">checkout</Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
