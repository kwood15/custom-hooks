import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import { Homepage } from './Homepage';
import { SearchResults } from './search/components/SearchResults';
import Favourites from './account/favourites';
import Profile from './account/profile';
import ShoppingList from './account/shopping-list';

function Router(): ReactElement {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/search-results" component={SearchResults} />
        <Route path="/basket">basket</Route>
        <Route path="/checkout">checkout</Route>
        <Route path="/favourites" component={Favourites} />
        <Route path="/accounts/profile" component={Profile} />
        <Route path="/accounts/shopping-list" component={ShoppingList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
