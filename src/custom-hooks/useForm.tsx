import { ChangeEvent, MouseEvent, useState, useDebugValue } from 'react';

export function useForm<K>(
  initialValues: K
): [
  K,
  (event: ChangeEvent<HTMLInputElement>) => void,
  (event: MouseEvent<HTMLButtonElement>) => void
] {
  const [values, setValues] = useState<K>(initialValues);

  useDebugValue('useForm');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({
      ...values,
      [target.name]: value,
    });
  }

  function handleSubmit() {
    console.log(JSON.stringify(values));
  }

  return [values, handleChange, handleSubmit];
}
