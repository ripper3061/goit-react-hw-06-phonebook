import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppSection } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsLS = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsLS);

    if (parsedContacts.length === 0) {
      return;
    }
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmithandler = data => {
    const id = nanoid(10);

    if (checkContactsName(data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, { id, ...data }]);
  };

  const checkContactsName = name => {
    const normalizedName = name.toLowerCase();

    return contacts.some(({ name }) => normalizedName === name.toLowerCase());
  };

  const filterChange = e => {
    const { value } = e.currentTarget;

    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <AppSection>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmithandler} />
      </Section>

      <Section title="Contacts">
        <Filter onChange={filterChange} value={filter} />
        <ContactsList
          contactsList={getVisibleContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </AppSection>
  );
}

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   formSubmithandler = data => {
//     const id = nanoid(10);

//     if (this.checkContactsName(data.name)) {
//       alert(`${data.name} is already in contacts.`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { id, ...data }],
//     }));
//   };

//   checkContactsName = name => {
//     const { contacts } = this.state;
//     const normalizedName = name.toLowerCase();

//     return contacts.some(({ name }) => normalizedName === name.toLowerCase());
//   };

//   filterChange = e => {
//     const { value } = e.currentTarget;

//     this.setState({ filter: value });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizeFilter = filter.toLocaleLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(normalizeFilter)
//     );
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const {
//       formSubmithandler,
//       filterChange,
//       getVisibleContacts,
//       deleteContact,
//     } = this;

//     return (
//       <AppSection>
//         <Section title="Phonebook">
//           <ContactForm onSubmit={formSubmithandler} />
//         </Section>

//         <Section title="Contacts">
//           <Filter onChange={filterChange} value={this.state.filter} />
//           <ContactsList
//             contactsList={getVisibleContacts()}
//             deleteContact={deleteContact}
//           />
//         </Section>
//       </AppSection>
//     );
//   }
// }

// export default App;
