import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: 'active' | 'inactive';
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
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addContact } = contactsSlice.actions

export default contactsSlice.reducer