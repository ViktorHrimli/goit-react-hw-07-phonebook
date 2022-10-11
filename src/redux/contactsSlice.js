import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContacts,
  fetchRemoveContact,
} from './operations';

const pendingStatus = ({ contact }) => {
  contact.isLoading = true;
};

const rejectedStatus = ({ contact }, action) => {
  contact.isLoading = false;
  contact.error = action.payload;
};

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
    [fetchAllContacts.pending]: pendingStatus,
    [fetchAddContacts.pending]: pendingStatus,
    [fetchRemoveContact.pending]: pendingStatus,
    [fetchAllContacts.rejected]: rejectedStatus,
    [fetchAddContacts.rejected]: rejectedStatus,
    [fetchRemoveContact.rejected]: rejectedStatus,

    [fetchAllContacts.fulfilled]({ contact }, action) {
      contact.isLoading = false;
      contact.error = null;
      contact.items = action.payload;
    },

    [fetchAddContacts.fulfilled]({ contact }, action) {
      contact.isLoading = false;
      contact.error = null;
      contact.items.push(action.payload);
    },

    [fetchRemoveContact.fulfilled]({ contact }, action) {
      contact.isLoading = false;
      contact.error = null;
      contact.items = contact.items.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const contactReducer = contactSlice.reducer;

// Selecotrs
export const selectContact = state => state.contacts.contact.items;
