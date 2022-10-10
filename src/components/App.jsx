import { Box } from 'commonStyle/Common.styled';
import { Formes } from './FormSection/Form';
import { Filter } from './FilterSection/Filter';
import { Renderlist } from './ListContact/ListContact';
import { ContactList } from './ListContact/ListContact.styled';
import { fetchAllContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
    return () => {};
  }, [dispatch]);

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" p={8}>
        <h1>Phonebook</h1>
        <Formes />
        <h2>Contacts</h2>
        <Filter />
        <ContactList>
          <Renderlist />
        </ContactList>
      </Box>
    </>
  );
};
