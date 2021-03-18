import { ReactElement, useEffect } from 'react';
import { endpoints } from '../../../helpers/api/endpoints';
import { useFetch } from '../../../custom-hooks/useFetch';
import { useLocalStorage } from '../../../custom-hooks/useLocalStorage';
import { ItemList, Item } from '..';
import { SearchList } from '../components/SearchList';

interface SearchResultsProps {
  searchTerm: string;
}

export function SearchResults({ searchTerm }: SearchResultsProps): ReactElement {
  const { fetchData, isLoading, data, isError } = useFetch<Partial<ItemList>>(
    `${endpoints.cocktails}?s=`,
    { drinks: [] }
  );

  const [values, setValues] = useLocalStorage<any>('favourites', []); // get favourites from local storage
  // console.log('from storage', values);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function handleClick(drink: Item, isFavourite: boolean) {
    if (isFavourite) {
      handleRemove(drink);
    } else {
      handleAdd(drink);
    }
  }

  function handleAdd(drink: Item) {
    setValues([...values, drink]);
  }

  function handleRemove(drink: Item) {
    setValues([
      ...values.filter((item: Item) => item.idDrink !== drink.idDrink),
    ]);
  }

  return (
    <>
      {isLoading ? (
        <p>{`Loading results ${searchTerm ? `for ${searchTerm}...` : ''}`}</p>
      ) : (
        <>
          <SearchList
            items={data?.drinks}
            handleClick={handleClick}
            values={values}
          />
        </>
      )}
      {isError && <p>An error occured, please try again</p>}
    </>
  );
}