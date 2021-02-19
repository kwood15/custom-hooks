import { ReactElement } from 'react';
import { useForm } from '../../../custom-hooks/useForm';

interface LoginForm {
  email: string;
  password: string;
}

export default function Login(): ReactElement {
  const [values, handleChange, handleSubmit] = useForm<LoginForm>({
    email: '',
    password: '',
  });

  const { email, password } = values;

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        value={email}
      />
      <hr />
      <label htmlFor="password">Password</label>
      <input
        id="password"
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
