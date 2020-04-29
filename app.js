const fs = require('fs');
const os = require('os');

const maleFirstName = ['Jarek', 'Adam', 'Pawel', 'Marcin', 'Zygmunt', 'Slawek', 'Kamil'];
const femaleFirstName = ['Lucyna', 'Karolina', 'Natalia', 'Kamila', 'Renata', 'Aleksandra', 'Karina'];
const lastName = ['Kowalski', 'Malina', 'Nowaczek', 'Krawczyk', 'Nowak', 'Woźniak', 'Krawczyk']; 

const person = [];

const maxAge = 78;
const minAge = 18;

const personCreator = () => {
  for (let x = 0; x <= 20; x++) {

    let gender = Math.floor(Math.random() * 2);
  
    let firstName = gender === 0 ? maleFirstName[Math.floor(Math.random() * 7)] : femaleFirstName[Math.floor(Math.random() * 7)];
    let surname = lastName[Math.floor(Math.random() * 7)];
    let emailAddress = firstName + '.' + surname + '@icloud.com';
  
    person.push({
      firstName: firstName,
      lastName: surname,
      gender: gender === 0 ? 'Male' : 'Female',
      age: Math.floor(Math.random() * (maxAge - minAge) + minAge),
      phoneNumber: '0' + Math.random().toString().slice(2, 11),
      email: emailAddress.toLowerCase(),
    })
  }
  return person;
};

fs.writeFile('persons.json', JSON.stringify(personCreator()), (err) => {
  if (err) {
    return console.error(err)
  }
  console.log('success');
});