import { useDispatch, useSelector } from 'react-redux';
import ContactItem from './ContactItem/ContactItem';
import { ThreeDots } from 'react-loader-spinner';
import { List } from '@mui/material';
import { fetchContacts } from 'store/operations';
import { useEffect } from 'react';
import { AccentText, EmptyInfo, EmptyWrapper } from './ContactList.styled';
import { TbHandClick } from 'react-icons/tb';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const loading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading)
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3869f1"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px 0',
        }}
        visible={true}
      />
    );
  if (!loading && contacts.length)
    return (
      <List sx={{ width: '600px', margin: '0 auto' }}>
        {contacts
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name, number }, i) => (
            <ContactItem key={id} id={id} name={name} number={number} i={i} />
          ))}
      </List>
    );

  if (!loading && !contacts.length)
    return (
      <EmptyWrapper>
        <EmptyInfo variant="h5" component="span">
          Add your first contact by clicking on
          <AccentText> "Add Contact"</AccentText>
        </EmptyInfo>
        <TbHandClick size={22} color="#929292" />
      </EmptyWrapper>
    );
};

export default ContactList;
