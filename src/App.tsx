import { ReactElement } from 'react';
import { SearchForm } from './components/search';
import { LoginForm } from './components/account/login';
import { FavouritesList } from './components/account/favourites';
import ListView from './components/ListView';

function App(): ReactElement {
  return (
    <>
      {/* Testing useForm/useFetch hook */}
      <LoginForm />
      <hr />
      <SearchForm />
      <hr />

      {/* Testing useFetch hook */}
      {/* <ListView /> */}

      {/* Testing useFetch/useLocalStorage hook */}
      <FavouritesList />
    </>
  );
}

export default App;
