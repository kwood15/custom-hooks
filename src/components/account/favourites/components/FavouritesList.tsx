import { ReactElement, useState, useEffect } from 'react';
import { endpoints } from '../../../../helpers/api/endpoints';
import { useFetch } from '../../../../custom-hooks/useFetch';
import { useLocalStorage } from '../../../../custom-hooks/useLocalStorage';

export function FavouritesList(): ReactElement {
  interface Item {
    idDrink: number;
    strDrink: string;
    strInstructions: string;
  }

  interface ItemList {
    drinks: Item[] | null;
  }

  const { fetchData, isLoading, data, isError } = useFetch<ItemList>(
    `${endpoints.cocktails}?s=`,
    { drinks: [] }
  );

  const [values] = useLocalStorage('test key', 'test val');

  useEffect(() => {
    fetchData();
    console.log('values', values);
  }, [fetchData, values]);

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <>
      {isLoading ? <p>Loading...</p> : data?.drinks?.map(({ idDrink, strDrink, strInstructions }: Item) => (
        <div key={idDrink}>
          <p>{strDrink}</p>
          <p>{strInstructions}</p>
          <button onClick={() => {
            console.log('idDrink', idDrink);
            setIsFavourite(!isFavourite);
          }}>
            {!isFavourite ? 'Add to Favourites' : 'Remove from Favourites'}
          </button>
        </div>
      ))}
      {isError && <p>An error occured, please try again</p>}
    </>
  );
}
