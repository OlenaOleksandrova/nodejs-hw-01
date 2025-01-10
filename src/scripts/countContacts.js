import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {

    try {
        const contacts = await readContacts();
        return contacts.length;
    }catch (err) {
    console.err("Error reading contacts:", err.message);
    throw err;
  }

};

console.log(await countContacts(5));
