import { ReactElement, useState, useEffect } from 'react';
import { endpoints } from '../../../../helpers/api/endpoints';
import { useFetch } from '../../../../custom-hooks/useFetch';
import { useLocalStorage } from '../../../../custom-hooks/useLocalStorage';
import { FavouritesItem } from '../components/FavouritesItem';

export interface Item {
  idDrink: number;
  strDrink: string;
  strInstructions: string;
}

interface ItemList {
  drinks: Item[] | null;
}

export function FavouritesList(): ReactElement {
  const { fetchData, isLoading, data, isError } = useFetch<ItemList>(
    `${endpoints.cocktails}?s=`,
    { drinks: [] }
  );

  const [values, setValues] = useLocalStorage<any>('favourites', []); // get favourites from local storage
  console.log('from storage', values);

  const [showFavourites, setShowFavourites] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function addToFavourites(drink: Item) {
    // console.log('drink', drink);
    if (!values.some((alreadyFavourite: Item) => alreadyFavourite.idDrink === drink.idDrink)) {
      setValues([...values, drink]);
    }
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.drinks?.map((drink: Item) => (
          <FavouritesItem
            key={drink.idDrink}
            item={drink}
            addToFavourites={() => addToFavourites(drink)}
          />
        ))
      )}
      {isError && <p>An error occured, please try again</p>}

      <hr />
      
      {/* Testing favs from storage */}
      <button onClick={() => setShowFavourites(!showFavourites)}>
        {showFavourites ? 'Hide Favourites' : 'Show Favourites'}
      </button>

      {showFavourites && values.map((favourite: Item) => (
        <FavouritesItem
          key={favourite.idDrink}
          item={favourite}
          addToFavourites={() => addToFavourites(favourite)}
        />
      ))}
    </>
  );
}
