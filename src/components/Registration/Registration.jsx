import { TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Btn, Form } from './Registration.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'store/operations';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit: values => {
      dispatch(register(values));
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
        Sign In
      </Typography>
      <TextField
        autoComplete="given-name"
        name="name"
        required
        fullWidth
        id="firstName"
        label="Name"
        value={formik.values.name}
        autoFocus
        onChange={formik.handleChange}
      />
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

      <Btn type="submit">Sing In</Btn>
    </Form>
  );
};

export default Registration;
