import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (e) {
    console.log(e);
  }
};

console.log(await getAllContacts());
