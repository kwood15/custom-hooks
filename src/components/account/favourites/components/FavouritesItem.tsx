import { useEffect, ReactElement } from 'react';
import { Item } from '..';

interface FavouriteItemProps {
  item: Item;
  isFavourite: boolean;
  handleClick: (item: Item) => void;
}

export function FavouritesItem({
  item,
  handleClick,
  isFavourite,
}: FavouriteItemProps): ReactElement {
  useEffect(() => {
    console.log('props.isFavourite', isFavourite);
  }, [isFavourite]);

  return (
    <div key={item.idDrink}>
      <p>{item.strDrink}</p>
      <p>{item.strInstructions}</p>
      <button onClick={() => handleClick(item)}>
        {isFavourite ? (
          <span>Remove from Favourites</span>
        ) : (
          <span>Add to Favourites</span>
        )}
      </button>
    </div>
  );
}
