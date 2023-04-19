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
type Fish={

   name: string,
   swim:()=>void

}
const isMyType = (type:any): type is MyType => {
     return "a" in type && "b" in type
} 

function addNumbers( numbers: MyType | number[] ) {
  console.log(numbers)

    if ( isMyType(numbers) ) {
      console.log("numbers is MyType : ",numbers)
        return numbers.a + numbers.b;
    }
    
    return numbers.reduce((total,current) =>  {
      console.log("total: " + total)
      console.log("current: " + current)
      return total + current
    })
    
}

const addition :MyType ={
   a:10,
   b:20
}

console.log(addNumbers(addition))

console.log(addNumbers([4,5,6,7,8,9,10,11,12]))
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

const isFish=(animal:any):animal is Fish=>{
     return 'swim' in animal 
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

console.log(isFish({name:"fishy"}))