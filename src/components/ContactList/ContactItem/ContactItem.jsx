import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { EditForm, Item } from './ContactItem.styled';
import { deleteContact, editContact } from 'store/operations';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const errorNotify = () =>
  toast.error(`Please fill in all fields`, {
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
  toast.success(`Contact edited successfully!`, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const ContactItem = ({ id, name, number, i }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name,
      number,
    },
    onSubmit: values => {
      if (!values.name || !values.number) return errorNotify();

      dispatch(editContact({ id, ...values }));
      successNotify();
    },
  });

  return (
    <Item sx={{ bgcolor: '#f7f7f7' }}>
      <Accordion sx={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<EditIcon fontSize="medium" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h6"
            component="span"
            sx={{ width: '60px', mr: '70px', alignSelf: 'center' }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            component="span"
            sx={{ mr: 'auto', color: '#303030', alignSelf: 'center' }}
            fontSize={16}
          >
            {number}
          </Typography>
          <Button
            type="button"
            name="delete"
            sx={{ color: '#237bff' }}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <DeleteIcon fontSize="large" />
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <EditForm onSubmit={formik.handleSubmit}>
            <TextField
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextField
              type="text"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
            />
            <Button type="submit">
              <CheckIcon fontSize="large" />
            </Button>
          </EditForm>
        </AccordionDetails>
      </Accordion>
      <ToastContainer />
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};
