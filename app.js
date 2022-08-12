// OBJECT LITERAL
const brad = {
  name: 'T\'Pol',
  age: 29
}

// console.log(brad, brad.age);

// PERSON CONSTRUCTOR FUNCTION
function Person(name, age, dob) {
  this.name = name,
  this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  console.log(this);
}

const six = new Person('Six', 27);
// const tpol = new Person('T\'Pol', 29);

console.log(this);

console.log(`${six.name} is ${six.age}`);

// \nand\n${tpol.name} is ${tpol.age}

const tpol = new Person('T\'Pol', 27, '6-04-95');
console.log(tpol.calculateAge());