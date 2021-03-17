import { MouseEvent, ReactElement } from 'react';
import { Item } from '..';
import { FavouritesItem } from '../components/FavouritesItem';

interface FavouritesListProps {
  items: Item[] | undefined;
  handleClick: (item: Item) => void; // e: MouseEvent<HTMLButtonElement>
  isFavourite: boolean;
}

export function FavouritesList({ items, handleClick, isFavourite }: FavouritesListProps): ReactElement {
  return (
    <>
      {items?.map((drink: Item) => (
        <FavouritesItem
          key={drink.idDrink}
          item={drink}
          handleClick={handleClick}
          isFavourite={isFavourite}
        />
      ))}
    </>
  );
}
