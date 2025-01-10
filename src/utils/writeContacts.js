import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        const jsonFile = JSON.stringify(updatedContacts, null, 2);
        await fs.writeFile(PATH_DB, jsonFile, 'utf8');
        console.log('Дані записані у файл');
    } catch (err) {
        console.log('Помилка:', err);
    }
};
