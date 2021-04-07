import { ReactElement } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

import Account from './components/account';

Amplify.configure(awsExports);

function ProtectedApp(): ReactElement {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </>
  );
}

export default withAuthenticator(ProtectedApp);
