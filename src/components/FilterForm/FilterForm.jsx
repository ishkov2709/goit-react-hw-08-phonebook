import { TextField } from '@mui/material';
import { useFormik } from 'formik';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { filter } from 'store/contacts/contactSlice';

const FilterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      filter: '',
    },
  });

  const handleFilterChange = e => {
    formik.handleChange(e);
    dispatch(filter(e.target.value));
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TextField
        label="Search"
        variant="standard"
        type="text"
        name="filter"
        onChange={handleFilterChange}
        value={formik.values.filter}
        color="primary"
      />
    </ThemeProvider>
  );
};

export default FilterForm;
