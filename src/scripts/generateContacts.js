import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from './updateContacts.js';

const generateContacts = async (number) => {
    const contactList = await getAllContacts();
    const newContactsList = Array(number).fill(0).map(createFakeContact);
    const data = [...contactList, ...newContactsList];
    await updateContacts(data);
    
};

generateContacts(5);

