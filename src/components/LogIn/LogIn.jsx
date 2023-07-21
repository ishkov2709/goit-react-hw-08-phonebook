import { TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Btn, Form } from './LogIn.styled';
import { login } from 'store/operations';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: values => {
      dispatch(login(values));
      formik.resetForm();
      navigate('/');
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <LockIcon
        fontSize="large"
        sx={{ alignSelf: 'center', color: '#ec3a0d' }}
      />
      <Typography variant="h5" sx={{ alignSelf: 'center' }}>
        Log In
      </Typography>
      <TextField
        required
        fullWidth
        id="email"
        label="Email Address"
        type="email"
        name="email"
        value={formik.values.email}
        autoComplete="email"
        onChange={formik.handleChange}
        autoFocus
      />
      <TextField
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value={formik.values.password}
        autoComplete="new-password"
        onChange={formik.handleChange}
      />

      <Btn type="submit">Log In</Btn>
    </Form>
  );
};

export default LogIn;
