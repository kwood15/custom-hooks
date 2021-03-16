import { ReactElement, useState } from 'react';
import { Item } from './FavouritesList';

interface FavouriteItemProps {
  item: Item;
  addToFavourites: () => void;
}

export function FavouritesItem({ item, addToFavourites }: FavouriteItemProps): ReactElement {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  function handleClick() {
    addToFavourites();
    setIsFavourite(!isFavourite);
  }

  return (
    <div key={item.idDrink}>
      <p>{item.strDrink}</p>
      <p>{item.strInstructions}</p>
      <button
        onClick={handleClick}
      >
        {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
      </button>
    </div>
  );
}
