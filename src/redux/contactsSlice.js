import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContacts,
  fetchAddContacts,
  fetchRemoveContact,
} from './operations';

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: { contact: [] },
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.contact.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number,
//           },
//         };
//       },
//     },
//     removeContact(state, action) {
//       state.contact = state.contact.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addContact, removeContact } = contactSlice.actions;

// const persistConfig = {
//   key: 'rootContact',
//   storage,
//   whitelist: ['contact'],
// };

// export const presistContactReducer = persistReducer(
//   persistConfig,
//   contactReducer
// );

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contact: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [fetchAllContacts.pending]({ contact }, _) {
      contact.isLoading = true;
    },
    [fetchAllContacts.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items = action.payload;
    },
    [fetchAllContacts.rejected]({ contact }, action) {
      contact.isLoading = false;
      contact.error = action.payload;
    },
    [fetchAddContacts.pending]({ contact }, _) {
      contact.isLoading = true;
    },
    [fetchAddContacts.fulfilled](state, action) {
      state.contact.isLoading = false;
      state.contact.error = null;
      state.contact.items.push(action.payload);
    },
    [fetchAddContacts.rejected]({ contact }, action) {
      contact.isLoading = false;
      contact.error = action.payload;
    },
  },
});

export const contactReducer = contactSlice.reducer;

// Selecotrs
export const getContact = state => state.contacts.contact.items;
