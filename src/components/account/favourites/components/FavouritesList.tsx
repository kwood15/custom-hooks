import { ReactElement } from 'react';
import { Item } from '..';
import { FavouritesItem } from '../components/FavouritesItem';

interface FavouritesListProps {
  items: Item[] | undefined;
  handleClick: (item: Item, isFavourite: boolean) => void;
  values: Item[];
}

export function FavouritesList({
  items,
  handleClick,
  values,
}: FavouritesListProps): ReactElement {
  return (
    <>
      {items?.map((drink: Item) => {
        const isFilteredFavourite = values.some(
          (item: Item) => item.idDrink === drink.idDrink
        );
        return (
          <FavouritesItem
            key={drink.idDrink}
            item={drink}
            handleClick={handleClick}
            isFilteredFavourite={isFilteredFavourite}
          />
        );
      })}
    </>
  );
}
