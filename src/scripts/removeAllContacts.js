import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {

    try {
        await writeContacts([]);
        console.log("Success removed");

    } catch (error) {
        console.error('Mistake remove contacts:', error);
    }
};

removeAllContacts();
