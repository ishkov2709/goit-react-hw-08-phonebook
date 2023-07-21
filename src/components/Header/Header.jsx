import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import FilterForm from 'components/FilterForm/FilterForm';
import { Btn, Link, Nav } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/operations';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const email = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="p" sx={{ mr: '6px' }}>
              Phonebook
            </Typography>
            <BookIcon sx={{ mr: '20px' }} />
            {isLoggedIn && (
              <>
                <Nav>
                  <Link to="/bookform">Add Contact</Link>
                  <Link to="/">Contacts</Link>
                </Nav>

                <FilterForm />
              </>
            )}
            <Grid sx={{ ml: 'auto' }}>
              {isLoggedIn ? (
                <>
                  <Typography component="span" fontSize={14}>
                    {email}
                  </Typography>
                  <Btn
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </Btn>
                </>
              ) : (
                <>
                  <Link to="/signin">Sign In</Link>
                  <Link to="/login">Log In</Link>
                </>
              )}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
