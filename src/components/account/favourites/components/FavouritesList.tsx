import { ReactElement } from 'react';
import { Item } from '..';
import { FavouritesItem } from '../components/FavouritesItem';

interface FavouritesListProps {
  items: Item[] | undefined;
  handleClick: (item: Item) => void;
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

      <hr />

      {/* Testing favs from storage */}
      {/* <button onClick={() => setShowFavourites(!showFavourites)}>
        {showFavourites ? 'Hide Favourites' : 'Show Favourites'}
      </button>

      {showFavourites &&
        items.map((favourite: Item) => (
          <FavouritesItem
            key={favourite.idDrink}
            item={favourite}
            handleClick={handleClick}
            isFavourite={isFavourite}
          />
        ))} */}
    </>
  );
}
