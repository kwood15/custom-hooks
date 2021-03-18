import { ReactElement } from 'react';
import { ItemList, Item } from '..';

interface SearchFormResultsProps {
  data: ItemList | undefined;
}

export function SearchFormResults({ data }: SearchFormResultsProps): ReactElement {
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
