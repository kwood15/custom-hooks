import { ReactElement, useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from '../../../graphql/queries';

interface ShoppingListState {
  id: string | null;
  name: string;
  description: string;
}

// const initialState = { id: '', name: '', description: '' };

function ShoppingList(): ReactElement {
  // const [formData, setFormData] = useState<ShoppingListState>(initialState);
  const [items, setItems] = useState([]);

  async function fetchData() {
    try {
      const itemsData = await API.graphql(graphqlOperation(listTodos));
      // @ts-ignore
      const items = itemsData.data.listTodos.items;
      setItems(items);
    } catch (error) {
      console.log('There has been a problem retrieving your shopping list');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {items.map((item: ShoppingListState) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default ShoppingList;
