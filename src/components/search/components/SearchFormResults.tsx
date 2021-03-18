import { ReactElement } from 'react';
import { ItemList, Item } from './SearchForm';

interface SearchResultsProps {
  data: ItemList | undefined;
}

export function SearchFormResults({ data }: SearchResultsProps): ReactElement {
  return (
    <>
      {data?.drinks?.map(({ idDrink, strDrink, strInstructions }: Item) => (
        <div key={idDrink}>
          <p>{strDrink}</p>
          <p>{strInstructions}</p>
          <hr />
        </div>
      ))}
    </>
  );
}
