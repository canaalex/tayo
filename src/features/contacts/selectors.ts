import { RootState } from '../../app/store'; 

export const selectContacts = (state: RootState) => state.contacts.contacts;