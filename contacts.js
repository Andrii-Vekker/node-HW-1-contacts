const fs = require("fs").promisesж
const path = require("path");


const contactsPath = path.join(__dirname, "contacts.json")
console.log(contactsPath)

// TODO: задокументировать каждую функцию
const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parce(data)
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}


module.exports = {
    listContacts
}