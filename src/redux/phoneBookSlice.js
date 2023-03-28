import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
  filteredContacts: '',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    setFilter: (state, action) => {
      state.filteredContacts = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const persistedChangeReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);

export const { setContacts, removeContact, setFilter } = phoneBookSlice.actions;

// Selectors

export const getContacts = state => state.phoneBook.contacts;
export const getFilter = state => state.phoneBook.filteredContacts;
