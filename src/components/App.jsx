import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { NoContacts } from './NoContacts/NoContacts';
import { DisplayedContacts } from '../helpers/displayedContacts';
import { Wrapper, Title, ContactsTitle } from './App.styled';

export const App = () => {
  const displayedContacts = DisplayedContacts();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactsTitle>Contacts:</ContactsTitle>
      <Filter />
      {displayedContacts.length ? <ContactList /> : <NoContacts />}
    </Wrapper>
  );
};
