import { LoginFormState } from '../components/account/components/LoginForm';

export function validate(values: Partial<LoginFormState>) {
  let errors = {
    emailAddress: '',
    password: ''
  };

  if (!values.emailAddress) {
    errors.emailAddress = 'Email Address is required';
  }
  else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
    errors.emailAddress = 'Email address is invalid';
  }

  return errors;
}