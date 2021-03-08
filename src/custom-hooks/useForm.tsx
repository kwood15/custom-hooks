import {
  ChangeEvent,
  MouseEvent,
  FormEvent,
  useState,
  useDebugValue,
  useEffect
} from 'react';
import { FormFields } from '../types/formFields';

export function useForm<K>(
  initialValues: K,
  validate: (values: K) => {},
  callback: () => void
): [
  values: K,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (
    event: MouseEvent<HTMLButtonElement | FormEvent<HTMLFormElement>>
  ) => void,
  errors: Partial<FormFields> | Partial<K>
] {
  const [values, setValues] = useState<K>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<FormFields> | Partial<K>>({
    emailAddress: '',
    password: ''
  });

  useDebugValue('useForm');

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues((prevState) => ({
      ...prevState,
      [target.name]: value,
    }));
  }

  function handleSubmit(
    event: MouseEvent<HTMLButtonElement | FormEvent<HTMLFormElement>>
  ) {
    event.preventDefault();
    console.log(JSON.stringify(values));
    setIsSubmitting(true);
    setErrors(validate(values));
  }

  return [values, handleChange, handleSubmit, errors];
}
