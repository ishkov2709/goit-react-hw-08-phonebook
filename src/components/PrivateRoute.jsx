import { useSelector } from 'react-redux';
import LogIn from './LogIn/LogIn';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  return !isLoggedIn && !isRefreshing ? (
    <LogIn to={redirectTo} />
  ) : (
    <Component />
  );
};
