import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from './updateContacts.js';

export const addOneContact = async () => {
    const contactList = await getAllContacts();
    const newContact = createFakeContact();
    const data = [...contactList, newContact];
    await updateContacts(data);
};

addOneContact();
