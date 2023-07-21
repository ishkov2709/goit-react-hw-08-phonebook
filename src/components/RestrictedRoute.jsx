import { useSelector } from 'react-redux';
import ContactList from './ContactList';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <ContactList to={redirectTo} /> : <Component />;
};
