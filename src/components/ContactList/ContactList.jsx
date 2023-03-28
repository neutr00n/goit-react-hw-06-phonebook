import { Contact } from '../Contact/Contact';
import { ContactItem } from './ContactList.styled';
import { DisplayedContacts } from '../../helpers/displayedContacts';

export const ContactList = () => {
  const displayedContacts = DisplayedContacts();

  return (
    <ul>
      {displayedContacts.map(({ id, name, number }, index) => (
        <ContactItem key={id}>
          <Contact name={name} number={number} id={id} index={index} />
        </ContactItem>
      ))}
    </ul>
  );
};
