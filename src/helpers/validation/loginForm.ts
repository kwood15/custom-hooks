import { LoginFormState } from '../../components/account/components/LoginForm';

export function validate(values: LoginFormState) {
  let errors = {
    emailAddress: '',
    password: ''
  };

  if (!values.emailAddress) {
    errors.emailAddress = 'Email Address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
    errors.emailAddress = 'Email Address is invalid';
  }
  
  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
}