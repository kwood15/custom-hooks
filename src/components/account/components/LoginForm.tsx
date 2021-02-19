import { ChangeEvent, MouseEvent, FormEvent, ReactElement } from 'react';
import { validate } from '../../../helpers/loginFormValidation';
import { useForm } from '../../../custom-hooks/useForm';

export interface LoginFormState {
  emailAddress: string;
  password: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
  ) => void;
  errors: {
    emailAddress: string;
    password: string;
  };
}

export default function LoginForm(): ReactElement {
  // @ts-ignore
  const [values, handleChange, handleSubmit, errors] = useForm<LoginFormState>({
    emailAddress: '',
    password: ''},
    validate
  ) 

  const { emailAddress, password } = values;

  return (
    <form noValidate={true}>
      <label htmlFor="emailAddress">Email</label>
      <input
        id="emailAddress"
        className={`${errors?.emailAddress ? 'is-danger' : ''}`}
        name="emailAddress"
        type="email"
        placeholder="Email address"
        onChange={handleChange}
        value={emailAddress}
      />
      <hr />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        className={`${errors?.password ? 'is-danger' : ''}`}
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={password}
      />
      <hr />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}
