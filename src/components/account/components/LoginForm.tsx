import { MouseEvent, FormEvent, ReactElement, useState  } from 'react';
import { validate } from '../../../helpers/validation/loginForm';
import { useForm } from '../../../custom-hooks/useForm';
import { useFetch } from '../../../custom-hooks/useFetch';

export interface LoginFormState {
  emailAddress: string;
  password: string;
  staySignedIn: boolean;
}

export function LoginForm(): ReactElement {
  const [values, handleChange] = useForm<LoginFormState>({
    emailAddress: '',
    password: '',
    staySignedIn: false
  }); 

  const [, setIsSubmitting] = useState<boolean>(false);
  
  const [errors, setErrors] = useState<Partial<LoginFormState>>({
    emailAddress: '',
    password: ''
  });

  const { fetchData } = useFetch<LoginFormState>('/login-endpoint');

  const { emailAddress, password, staySignedIn } = values;

  function handleSubmit(
    event: MouseEvent<HTMLButtonElement | FormEvent<HTMLFormElement>>
  ) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
    fetchData({ 
      method: 'POST',
      body: JSON.stringify(values)
    }); 
  }

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
        <p className="has-error">{errors['emailAddress']}</p>
      </div>
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
        <p className="has-error">{errors['password']}</p>
      </div>
      <div>
        <label htmlFor="staySignedIn">
          Stay signed in:
          <input
            id="staySignedIn"
            name="staySignedIn"
            type="checkbox"
            checked={staySignedIn}
            onChange={handleChange}
          />
        </label>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Login
      </button>
    </form>
  );
}
