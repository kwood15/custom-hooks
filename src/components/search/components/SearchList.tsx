import { ReactElement } from 'react';
import { Item } from '..';
import { SearchItem } from '../components/SearchItem';

interface SearchListProps {
  items: Item[] | undefined;
  handleClick: (item: Item, isFavourite: boolean) => void;
  values: Item[];
}

export function SearchList({
  items,
  handleClick,
  values,
}: SearchListProps): ReactElement {
  return (
    <>
      {items?.map((drink: Item) => {
        const isFilteredFavourite = values.some(
          (item: Item) => item.idDrink === drink.idDrink
        );
        return (
          <SearchItem
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
