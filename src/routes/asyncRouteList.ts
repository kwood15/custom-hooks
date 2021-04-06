import asyncComponent from '../components/AsyncComponent';

const AsyncLoginForm = asyncComponent(
  () => import('../components/account/login/components/LoginForm'),
  true
);
