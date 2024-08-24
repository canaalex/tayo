import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}
interface ContactState {
  contacts: Contact[];
}

const initialState:ContactState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state,action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<Contact>) => {
      const {id}=action.payload;
      state.contacts = state.contacts.filter(contact => contact.id !== id);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, firstName, lastName, status } = action.payload;
      const index = state.contacts.findIndex(contact => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = { id, firstName, lastName, status };
      }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addContact,editContact,deleteContact } = contactsSlice.actions

export default contactsSlice.reducer