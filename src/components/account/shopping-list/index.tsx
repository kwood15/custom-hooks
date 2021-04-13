import { ReactElement, useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from '../../../graphql/queries';
import { createTodo } from '../../../graphql/mutations';
import { useForm } from '../../../custom-hooks/useForm';
import { TextField } from '../../TextField';

interface ShoppingListState {
  id: string | null;
  name: string;
  description: string;
}

const initialState = { id: '', name: '', description: '' };

function ShoppingList(): ReactElement {
  const [values, handleChange] = useForm<any>(initialState);
  const [items, setItems] = useState<ShoppingListState[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

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

  async function addItems() {
    try {
      if (!values.name || !values.description) return;
      setItems(values);
      await API.graphql(
        graphqlOperation(createTodo, {
          input: values
        })
      );
    } catch (error) {
      console.log('There has been a problem adding your item');
    }
  }

  return (
    <>
      <h3>Add Item</h3>
      <TextField
        id="name"
        name="name"
        onChange={handleChange}
        value={values.name}
      />
      <TextField
        id="description"
        name="description"
        onChange={handleChange}
        value={values.description}
      />
      <button onClick={addItems}>Add item</button>
      <h3>Shopping List</h3>
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
