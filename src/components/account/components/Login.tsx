import { ReactElement } from "react";
import { useForm } from "../../../custom-hooks/useForm";


export default function Login(): ReactElement {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        value={values.email}
      />
      <hr />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={values.password}
      />
      <hr />
      <button type="submit">Login</button>
    </form>
  );
}
