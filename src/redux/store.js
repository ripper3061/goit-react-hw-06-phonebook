import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const delContact = createAction('contacts/delContact');

const contactsReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [delContact]: (state, action) =>
    state.filer(contact => contact.id !== action.payload),
});
// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
