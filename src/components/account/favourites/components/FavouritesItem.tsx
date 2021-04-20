import { useState, ReactElement } from 'react';
import { Item } from '..';

interface FavouriteItemProps {
  item: Item;
  handleClick: (item: Item, isFavourite: boolean) => void;
  isFilteredFavourite: boolean;
}

export function FavouritesItem({
  item,
  handleClick,
  isFilteredFavourite
}: FavouriteItemProps): ReactElement {
  const [isFavourite, setIsFavourite] = useState<boolean>(isFilteredFavourite);

  return (
    <div key={item.idDrink}>
      <img src={item.strDrinkThumb} alt={item.strDrink} />
      <p>{item.strDrink}</p>
      <p>{item.strInstructions}</p>
      <button
        onClick={() => {
          handleClick(item, isFavourite);
          setIsFavourite(!isFavourite);
        }}
      >
        <span>
          {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
        </span>
      </button>
    </div>
  );
}
