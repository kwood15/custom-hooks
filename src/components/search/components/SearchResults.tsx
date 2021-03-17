import { ReactElement, useEffect } from 'react';
import { endpoints } from '../../../helpers/api/endpoints';
import { useFetch } from '../../../custom-hooks/useFetch';
import { ItemList, Item } from './SearchForm';

export function SearchResults(): ReactElement {
  const { fetchData, data } = useFetch<ItemList>(
    `${endpoints.cocktails}?s=`,
    { drinks: [] }
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {data?.drinks?.map(({ idDrink, strDrink, strInstructions }: Item) => (
        <div key={idDrink}>
          <p>{strDrink}</p>
          <p>{strInstructions}</p>
        </div>
      ))}
    </>
  );
}
