import { useSelector, useDispatch } from 'react-redux';
import {
  setContacts,
  removeContact,
  setFilter,
  getContacts,
  getFilter,
} from 'redux/phoneBookSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { NoContacts } from './NoContacts/NoContacts';

import { Wrapper, Title, ContactsTitle } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFormSubmit = contact => {
    const isAdded = checkContactIsAdded(contact);

    if (isAdded) {
      return alert(`${contact.name} is already in contacts`);
    }

    dispatch(setContacts(contact));
  };

  const handleFilterValue = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const checkContactIsAdded = ({ name }) => {
    const normalizedContactName = name.toLowerCase().trim();

    return contacts.find(
      ({ name }) => name.toLowerCase().trim() === normalizedContactName
    );
  };

  const normalizedSearchingName = filteredContacts.toLocaleLowerCase().trim();

  let displayedContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().trim().includes(normalizedSearchingName)
  );

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm handleFormSubmit={handleFormSubmit} />
      <ContactsTitle>Contacts:</ContactsTitle>
      <Filter handleFilterValue={handleFilterValue} value={filteredContacts} />
      {displayedContacts.length !== 0 ? (
        <ContactList
          contacts={displayedContacts}
          handleRemoveContact={handleRemoveContact}
        />
      ) : (
        <NoContacts />
      )}
    </Wrapper>
  );
};
