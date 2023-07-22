import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { refreshUser } from 'store/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const LogIn = lazy(() => import('./LogIn'));
const Registration = lazy(() => import('./Registration'));
const ContactList = lazy(() => import('./ContactList'));
const Bookform = lazy(() => import('./BookForm'));

export const App = () => {
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PrivateRoute component={ContactList} />} />
          <Route
            path="bookform"
            element={<PrivateRoute component={Bookform} />}
          />
          <Route
            path="signin"
            element={<RestrictedRoute component={Registration} />}
          />
          <Route path="login" element={<RestrictedRoute component={LogIn} />} />
        </Route>
      </Routes>
    )
  );
};
