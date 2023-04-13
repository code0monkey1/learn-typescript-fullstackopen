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