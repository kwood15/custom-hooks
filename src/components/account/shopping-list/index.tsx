import { ReactElement, useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { CreateTodoInput } from '../../../../api';
import { listTodos } from '../../../graphql/queries';
import { createTodo } from '../../../graphql/mutations';

import { useForm } from '../../../custom-hooks/useForm';
import { TextField } from '../../TextField';

const initialState: CreateTodoInput = {
  id: null,
  name: '',
  description: ''
};

function ShoppingList(): ReactElement {
  const [values, handleChange] = useForm<CreateTodoInput>(initialState);
  const [items, setItems] = useState<CreateTodoInput[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const itemsData: any = await API.graphql(graphqlOperation(listTodos)); // as GraphQLResult<ListTodosQuery>
      const items = itemsData.data.listTodos.items;
      setItems(items);
    } catch (error) {
      console.log('There has been a problem retrieving your shopping list');
    }
  }

  async function addItems() {
    try {
      if (!values.name || !values.description) return;
      setItems([...items, { ...values }]);
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
        label="Name"
        id="name"
        name="name"
        onChange={handleChange}
        value={values.name}
      />
      <TextField
        label="Description"
        id="description"
        name="description"
        onChange={handleChange}
        value={values.description || ''}
      />
      <button onClick={addItems}>Add item</button>
      <h3>Shopping List</h3>
      {items.length > 0 &&
        items.map((item: CreateTodoInput) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
    </>
  );
}

export default ShoppingList;
