import { ReactElement } from 'react';
import Search from './components/Search';
import ListView from './components/ListView';
import LoginForm from './components/account/components/LoginForm';

function App(): ReactElement {
  return (
    <>
      {/* Testing useForm/useFetch hook */}
      <LoginForm />
      <Search />

      {/* Testing useFetch hook */}
      <ListView />
    </>
  );
}

export default App;
