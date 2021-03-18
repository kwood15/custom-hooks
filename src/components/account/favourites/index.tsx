import { ReactElement } from 'react';
import { useState, useEffect } from 'react';
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
}

export default function Favourites(): ReactElement {
  const { fetchData, isLoading, data, isError } = useFetch<ItemList>(
    `${endpoints.cocktails}?s=`,
    { drinks: [] }
  );

  const [values, setValues] = useLocalStorage<any>('favourites', []); // get favourites from local storage
  console.log('from storage', values);

  const [showFavourites] = useState<boolean>(true);

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
    if (!values.some((item: Item) => item.idDrink === drink.idDrink)) {
      setValues([...values, drink]);
    }
  }

  function handleRemove(drink: Item) {
    setValues([
      ...values.filter((item: Item) => item.idDrink !== drink.idDrink)
    ]);
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <FavouritesList
            items={data?.drinks}
            handleClick={handleClick}
          />
          <hr />
          {showFavourites && (
            <FavouritesList
              items={values}
              handleClick={handleClick}
            />
          )}
        </>
      )}
      {isError && <p>An error occured, please try again</p>}
    </>
  )
}

