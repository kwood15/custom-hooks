import { ReactElement } from 'react';
import Search from './components/search';
import ListView from './components/ListView';
import LoginForm from './components/account/components/LoginForm';

function App(): ReactElement {
  return (
    <>
      {/* Testing useForm/useFetch hook */}
      <LoginForm />
      <hr />
      <Search />
      <hr />

      {/* Testing useFetch hook */}
      <ListView />
    </>
  );
}

export default App;
