import { useState } from 'react';

export function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues({
        [e.target.name]: e.target.value,
      }),
  ];
}
