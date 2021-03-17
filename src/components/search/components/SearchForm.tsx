import { ReactElement } from 'react';
import { endpoints } from '../../../helpers/api/endpoints';
import { useForm } from '../../../custom-hooks/useForm';
import { useFetch } from '../../../custom-hooks/useFetch';
import { useDebounce } from '../../../custom-hooks/useDebounce';
import { SearchResults } from './SearchResults';

export interface Item {
  idDrink: number;
  strDrink: string;
  strInstructions: string;
}

export interface ItemList {
  drinks: Item[] | undefined;
}

interface SearchFormState {
  search: string;
}

export function SearchForm(): ReactElement {
  const [values, handleChange] = useForm<SearchFormState>({
    search: '',
  });

  const { search } = values;

  const debouncedSearchTerm = useDebounce(search, 250); // can be adjusted for the delay

  const { fetchData, isLoading, data, isError } = useFetch<ItemList>(
    `${endpoints.cocktails}?s=${debouncedSearchTerm}`,
    { drinks: [] }
  );

  return (
    <>
      <form noValidate={true}>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Search for a cocktail..."
          onChange={(e) => {
            handleChange(e);
            fetchData();
          }}
        />
      </form>
      <>
        {isLoading ? <p>Loading cocktails...</p> : <SearchResults data={data} />}
        {isError && <p>An error occured, please try again</p>}
      </>
    </>
  );
}
