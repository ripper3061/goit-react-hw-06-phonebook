// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
// import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppSection } from './App.styled';

export default function App() {
  // const contacts = useSelector(getContacts);
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const contactsLS = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contactsLS);

  //   if (parsedContacts.length === 0) {
  //     return;
  //   }
  //   setContacts(parsedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const filterChange = e => {
  //   const { value } = e.currentTarget;

  //   setFilter(value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizeFilter = filter.toLocaleLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizeFilter)
  //   );
  // };

  // const deleteContact = id => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== id)
  //   );
  // };

  return (
    <AppSection>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Filter />
      {/* <Section title="Contacts">
        {contacts.length > 0 && (
          <>
            <Filter onChange={filterChange} value={filter} />
            <ContactsList
              contactsList={getVisibleContacts()}
              deleteContact={deleteContact}
            />
          </>
        )}
        {contacts.length === 0 && <p>There is no contacts</p>}
      </Section> */}
    </AppSection>
  );
}
