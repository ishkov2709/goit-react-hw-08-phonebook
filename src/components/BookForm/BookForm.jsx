import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { Form } from './BookForm.styled';
import { addContact } from 'store/operations';

const errorNotify = target =>
  toast.error(`${target} already exists in the phonebook`, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const successNotify = () =>
  toast.success(`Contact added to phonebook!`, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const BookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: values => {
      if (!values.name || !values.number) return;

      if (
        contacts.find(el => el.name.toLowerCase() === values.name.toLowerCase())
      )
        return errorNotify(`Name ${values.name}`);

      if (contacts.find(el => el.number === values.number))
        return errorNotify(`Phone number ${values.number}`);

      dispatch(addContact(values));
      successNotify();

      formik.resetForm();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Jack"
        />
        <TextField
          id="filled-basic"
          label="Number"
          variant="filled"
          type="tel"
          name="number"
          onChange={formik.handleChange}
          value={formik.values.number}
          placeholder="0990003355"
        />
        <Button type="submit" name="submit" sx={{ fontSize: '22px' }}>
          Add contact
        </Button>
      </Form>
      <div>
        <ToastContainer />
      </div>
    </>
  );
};

export default BookForm;
