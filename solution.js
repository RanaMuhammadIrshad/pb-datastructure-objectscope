"usr strict";

/*
1. Create the following object: 
```javascript
const student = { 
firstName: "John", 
lastName: "Smith", 
class: 12 };
```
* Create a method that prints the following: 
```javascript
"John smith is a student in class 12"
``` 
 */
console.log(`-----01-----`);
const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
};

console.log(student);

function printData() {
  return `${student.firstName} ${student.lastName} is a student in class ${student.class}`;
}

const retPrintData = printData();
console.log(retPrintData);


/* 
2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France". */
console.log(`-----02-----`);
const person = {
    firstName: 'John',
    lastName : 'Smith',
    age: 41,
    job : 'engineer',
    city : 'London',

}


function personData () {
    return `${person.firstName} ${person.lastName} is a ${person.age} years old ${person.job} living in ${person.city}`;
}

const printPersonData = personData();
console.log(printPersonData);


/* 
3. Write a method to get the length of the person object. */
console.log(`-----03-----`);
console.log(`Length of student-object is: ${Object.keys(student).length}`);
console.log(`Length of person-object is: ${Object.keys(person).length}`);
