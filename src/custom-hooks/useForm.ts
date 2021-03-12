import {
  ChangeEvent,
  useState,
  useDebugValue,
} from 'react';

export function useForm<K>(
  initialValues: K,
): [
  values: K,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
] {
  const [values, setValues] = useState<K>(initialValues);

  useDebugValue('useForm');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, checked, value } = event.target;

    const fieldValue = type === 'checkbox' || type === 'radio' ? checked : value;

    setValues((prevState) => ({
      ...prevState,
      [name]: fieldValue
    }));
  }

  return [values, handleChange];
}
