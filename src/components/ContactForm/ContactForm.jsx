import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { setContacts, getContacts } from 'redux/phoneBookSlice';
import { nanoid } from 'nanoid';
import {
  ContForm,
  Label,
  InputDescrip,
  ContInput,
  Button,
  ErrMessageText,
} from './ContactForm.styled';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Name is not valid').required(),
  number: yup.string().matches(phoneRegExp, 'Number is not valid').required(),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onFormSubmit = (values, { resetForm }) => {
    const contact = { id: nanoid(), ...values };

    const isAdded = checkContactIsAdded(contact);

    if (isAdded) {
      return alert(`${contact.name} is already in contacts`);
    }

    dispatch(setContacts(contact));

    resetForm();
  };

  const checkContactIsAdded = ({ name }) => {
    const normalizedContactName = name.toLowerCase().trim();

    return contacts.find(
      ({ name }) => name.toLowerCase().trim() === normalizedContactName
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <ContForm>
        <Label>
          <InputDescrip>Name</InputDescrip>
          <ContInput type="text" name="name" placeholder="Rosie Simpson" />
          <ErrorMessage
            name="name"
            render={msg => <ErrMessageText> {msg} </ErrMessageText>}
          />
        </Label>
        <Label>
          <InputDescrip>Number</InputDescrip>
          <ContInput type="tel" name="number" placeholder="+380-00-000-00-00" />
          <ErrorMessage
            name="number"
            render={msg => <ErrMessageText> {msg} </ErrMessageText>}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContForm>
    </Formik>
  );
};
