import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try {
        //1. зчитати контакти
        const contacts = await readContacts();

        //2. створ.один новий контакт
        const newContact = createFakeContact();

        //3. додаємо один контакт до масиву
        contacts.push(newContact);

        //4. запишемо новий контакт у масив
        await writeContacts(contacts);

          console.log('successfully:', newContact);
    } catch (err) {
        console.err('Error adding:', err.message);
    }

};

addOneContact();
