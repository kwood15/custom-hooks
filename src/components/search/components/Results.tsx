import { ReactElement } from 'react';
import { ItemList, Item } from '../../search/index';

interface ResultsProps {
  data: ItemList | null;
}

export function Results({ data }: ResultsProps): ReactElement {
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
