
// Task: CRUD Functionality
// Create a simple phone book application functionality using JavaScript objects. Your application should allow users to add new contacts, search for contacts by name, update existing contacts, and delete contacts.
// Implement the following functionalities:
// Add a new contact:  Allow users to add a new contact by providing their name, phone number, and email address.
// Search for a contact: Allow users to search for a contact by entering their name. If the contact is found, display their details (name, phone number, email). If not found, display a message indicating that the contact does not exist.
// Update a contact: Allow users to update the phone number and email address of an existing contact by providing their name and the updated information.
// Delete a contact: Allow users to delete a contact by entering their name.
// Feel free to reach out if you have any questions.


let info = [];

function addContact(name, phoneNumber, email) {
    info.push({ name, phoneNumber, email });
}

function searchContact(name) {
    const contact = info.find(contact => contact.name === name);
    if (contact) {
        console.log("Contact Found:");
        console.log("Name:", contact.name);
        console.log("Phone Number:", contact.phoneNumber);
        console.log("Email:", contact.email);
    } else {
        console.log("Contact not found.");
    }
}

function updateContact(name, newPhoneNumber, newEmail) {
    const index = info.findIndex(contact => contact.name === name);
    if (index !== -1) {
        info[index].phoneNumber = newPhoneNumber;
        info[index].email = newEmail;
        console.log("Contact updated successfully.");
    } else {
        console.log("Contact not found.");
    }
}

function deleteContact(name) {
    const index = info.findIndex(contact => contact.name === name);
    if (index !== -1) {
        info.splice(index, 1);
        console.log("Contact deleted successfully.");
    } else {
        console.log("Contact not found.");
    }
}

addContact("Eram", "1234567890", "eram@786.com");
addContact("Sana", "9876543210", "Sana@123.com");

searchContact("Eram");

updateContact("Eram", "5555555555", "john.doe@example.com");
searchContact("Eram");

deleteContact("Sana");
searchContact("Sana");