import { ReactElement, useEffect } from 'react';
import { useForm } from '../custom-hooks/useForm';
import { useFetch } from '../custom-hooks/useFetch';

interface Item {
  idDrink: number;
  strDrink: number;
}

interface ItemList {
  drinks: Item[] | null;
}

interface SearchState {
  search: string;
}

export default function Search(): ReactElement {
  const [values, handleChange] = useForm<SearchState>({
    search: '',
  });

  const { search } = values;

  const { fetchData, isLoading, data, isError } = useFetch<ItemList>(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
    { drinks: [] }
  );

  useEffect(() => {
    fetchData();
    // console.log('data', data);
  }, [fetchData]);

  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        name="search"
        type="search"
        placeholder="Search for a cocktail..."
        onChange={handleChange}
      />

      {isLoading ? (
        <p>Loading cocktails...</p>
      ) : (
        data?.drinks?.map((item: Item) => (
          <p key={item.idDrink}>{item.strDrink}</p>
        ))
      )}
      {isError && <p>An error occured, please try again</p>}
    </>
  );
}
