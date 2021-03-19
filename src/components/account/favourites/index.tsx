import { ReactElement } from 'react';
import { useEffect } from 'react';
import { endpoints } from '../../../helpers/api/endpoints';
import { useFetch } from '../../../custom-hooks/useFetch';
import { useLocalStorage } from '../../../custom-hooks/useLocalStorage';
import { FavouritesList } from './components/FavouritesList';

export interface Item {
  idDrink: number;
  strDrink: string;
  strInstructions: string;
}

interface ItemList {
  drinks: Item[] | undefined;
  values: Item[];
}

export default function Favourites(): ReactElement {
  const { fetchData, isLoading, isError } = useFetch<Partial<ItemList>>(
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
        <p>Loading favourites...</p>
      ) : (
        <>
          <FavouritesList
            items={values}
            handleClick={handleClick}
            values={values}
          />
        </>
      )}
      {isError && <p>An error occured, please try again</p>}
    </>
  );
}
