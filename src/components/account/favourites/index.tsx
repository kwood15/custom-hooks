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

  const [showFavourites, setShowFavourites] = useState<boolean>(false);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
    console.log('isFavourite state', isFavourite);
  }, [fetchData]);

  function handleClick(drink: Item) {
    if (!isFavourite) {
      handleAdd(drink);
    } else {
      handleRemove(drink);
    }
  }

  function handleAdd(drink: Item) {
    setIsFavourite(true);
    if (!values.some((item: Item) => item.idDrink === drink.idDrink)) {
      setValues([...values, drink]);
    }
  }

  function handleRemove(drink: Item) {
    setIsFavourite(false);
    setValues([
      ...values.filter((item: Item) => item.idDrink !== drink.idDrink)
    ]);
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <FavouritesList
          items={data?.drinks}
          handleClick={handleClick}
          isFavourite={isFavourite}
        />
      )}

      {isError && <p>An error occured, please try again</p>}

      <hr />

      {/* Testing favs from storage
      <button onClick={() => setShowFavourites(!showFavourites)}>
        {showFavourites ? 'Hide Favourites' : 'Show Favourites'}
      </button>

      {showFavourites &&
        <FavouritesList
          items={values}
          handleClick={handleClick}
          isFavourite={isFavourite}
        />
      } */}
    </>
  )
}

