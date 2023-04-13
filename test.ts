interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello, ${person.name}!`);
}

const john = { name: 'John', age: 30 };
greet(john); // This works because john has the same structure as Person

const jane = { name: 'Jane', age: 25 };
greet(jane); // This also works because jane has the same structure as Person


interface MyType{
  a:number
  b: number
}

function addNumbers( numbers: MyType | number[] ) {

    if ( numbers instanceof Date ) {

    }
}

interface Dog {
  name: string;
  breed: string;
}

interface Cat {
  name: string;
  color: string;
}

function isDog(animal: Dog | Cat): animal is Dog {
  return animal instanceof Number;
}

const myDog: Dog = { name: 'Fido', breed: 'Labrador' };
const myCat: Cat = { name: 'Whiskers', color: 'gray' };

function printAnimal(animal: Dog | Cat) {
  if (isDog(animal)) {
    console.log(`${animal.name} is a ${animal.breed} dog`);
  } else {
    console.log(`${animal.name} is a ${animal.color} cat`);
  }
}

printAnimal(myDog); // "Fido is a Labrador dog"
printAnimal(myCat); //