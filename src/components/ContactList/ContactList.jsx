import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { ContactItem } from './ContactList.styled';

export const ContactList = ({ contacts, handleRemoveContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }, index) => (
        <ContactItem key={id}>
          <Contact
            name={name}
            number={number}
            handleRemoveContact={handleRemoveContact}
            id={id}
            index={index}
          />
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveContact: PropTypes.func.isRequired,
};
