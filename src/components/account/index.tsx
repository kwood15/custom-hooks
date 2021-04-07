import { ReactElement } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { OrdersList } from './orders/components/OrdersList';
import { Profile } from './profile/components/Profile';

function Account(): ReactElement {
  let match = useRouteMatch();
  return (
    <>
      testing
      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/profile`}>Profile</Link>
          </li>
          <li>
            <Link to={`${match.url}/orders`}>Orders</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${match.path}/profile`}>
          <Profile />
        </Route>
        <Route path={`${match.path}/orders`}>
          <OrdersList />
        </Route>
        {/* <Route path="/account/favourites" />
        <Route path="/account/wishlists" /> */}
      </Switch>
    </>
  );
}

export default Account;
