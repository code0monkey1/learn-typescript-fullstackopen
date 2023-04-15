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

const isMyType = (type:any): type is MyType => {
     return true;
} 

function addNumbers( numbers: MyType | number[] ) {

    if ( isMyType(numbers) ) {
        return numbers.a + numbers.b;
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

class Farm {
   constructor(name: string, age: number){ }
}

function isDog(animal: Dog | Cat): animal is Dog {
  return animal instanceof Farm;
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

function logAnything<T>(value: T): void{

   if (Array.isArray(value)) 
     value.forEach((item) => console.log(item))   
   else
    console.log(value)
   
}


const isArray =(value:any):value is Dog =>{
     return (value as Dog).breed !== undefined
}

let arr ="hello"

logAnything(arr)

