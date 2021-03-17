import { ReactElement } from 'react'
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './components/SearchResults';

export default function Search(): ReactElement {
  return (
    <>
      <SearchForm />
      <SearchResults />
    </>
  )
}
