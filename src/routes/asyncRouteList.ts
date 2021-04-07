import asyncComponent from '../components/AsyncComponent';

export const AsyncLoginForm = asyncComponent(
  () => import('../components/account/login/components/LoginForm'),
  true
);

const asyncRouteList = {
  component: AsyncLoginForm,
  path: '/login'
};

export default asyncRouteList;
