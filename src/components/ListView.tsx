import { ReactElement, useEffect } from 'react';
import { useFetch } from '../custom-hooks/useFetch';

interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Data = Item[] | null;

export default function ListView(): ReactElement {
  const { fetchData, isLoading, data, isError } = useFetch<Data>('https://jsonplaceholder.typicode.com/posts', []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((item: Item) => <p key={item.id}>{item.title}</p>)
      )}
      {isError && <p>An error occured, please try again</p>}
    </>
  );
}
