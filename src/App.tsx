import { ReactElement } from 'react';
import LoginForm from './components/account/components/LoginForm';
import ListView from './components/ListView';

function App(): ReactElement {
  return (
    <>
      <LoginForm />
      <ListView />
    </>
  );
}

export default App;
