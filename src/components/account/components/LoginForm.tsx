import { ChangeEvent, MouseEvent, FormEvent, ReactElement } from 'react';
import { FormFields } from '../../../types/formFields';
import { validate } from '../../../helpers/validation/loginForm';
import { useForm } from '../../../custom-hooks/useForm';

export interface LoginFormState {
  emailAddress: string;
  password: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
  ) => void;
  errors: FormFields;
}

export default function LoginForm(): ReactElement {
  // @ts-ignore
  const [values, handleChange, handleSubmit, errors] = useForm<LoginFormState>({
    emailAddress: '',
    password: '',
  }, validate); 

  const { emailAddress, password } = values;

  return (
    <form noValidate={true}>
      <div>
        <label htmlFor="emailAddress">Email</label>
        <input
          id="emailAddress"
          className={`${errors?.emailAddress ? 'has-error' : ''}`}
          name="emailAddress"
          type="email"
          placeholder="Email address"
          onChange={handleChange}
          value={emailAddress}
        />
         <p className="has-error">
          {errors['emailAddress']}
        </p>
      </div>
      <hr />
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className={`${errors?.password ? 'has-error' : ''}`}
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
        <p className="has-error">
          {errors['password']}
        </p>
      </div>
      <hr />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}
