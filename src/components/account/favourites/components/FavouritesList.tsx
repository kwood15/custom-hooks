import { ReactElement } from 'react';
import { Item } from '..';
import { FavouritesItem } from '../components/FavouritesItem';

interface FavouritesListProps {
  items: Item[] | undefined;
  handleClick: (item: Item, isFavourite: boolean) => void; // e: MouseEvent<HTMLButtonElement>
}

export function FavouritesList({ items, handleClick }: FavouritesListProps): ReactElement {
  return (
    <>
      {items?.map((drink: Item) => (
        <FavouritesItem
          key={drink.idDrink}
          item={drink}
          handleClick={handleClick}
        />
      ))}
    </>
  );
}
