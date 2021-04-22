import { ReactElement } from 'react';

import Router from './components/Router';
import './assets/scss/main.scss';

import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App(): ReactElement {
  return <Router />;
}

export default App;
