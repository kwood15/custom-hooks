import { useState, ReactElement } from 'react';
import { Item } from '..';

interface SearchItemProps {
  item: Item;
  handleClick: (item: Item, isFavourite: boolean) => void;
  isFilteredFavourite: boolean;
}

export function SearchItem({
  item,
  handleClick,
  isFilteredFavourite
}: SearchItemProps): ReactElement {
  const [isFavourite, setIsFavourite] = useState<boolean>(isFilteredFavourite);

  return (
    <div key={item.idDrink}>
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
