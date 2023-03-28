import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/phoneBookSlice';

export const DisplayedContacts = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilter);

  const normalizedSearchingName = filteredContacts.toLocaleLowerCase().trim();

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().trim().includes(normalizedSearchingName)
  );
};
