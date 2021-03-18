import { ReactElement } from 'react'
import { SearchForm } from './components/SearchForm';

export interface Item {
  idDrink: number;
  strDrink: string;
  strInstructions: string;
}

export interface ItemList {
  drinks: Item[] | undefined;
}

export default function Search(): ReactElement {
  return (
    <SearchForm />
  )
}
