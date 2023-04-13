# learn-typescript-fullstackopen
 typescript fundaments - full stack open course

### TypeScript consists of three parts :

1. The language -  
      - **syntax**
      - **keywords** 
      - **type annotations**
2. The compiler :
     - transpiles code from **.ts** to **.js**
     - **static code analysis** -> can emit warnings or errors if detected
     - can put generated **.js** files into specified file/folder.
3. Language service : 
     - intellisense 
     - type hints 
     - refactoring alternatives

### Key Language Features :

1. Type annotations
   
      - >`const birthdayGreeter = (name: string, age: number): string => {return `Happy birthday ${name}, you are now ${age} years old!`;
      }`
      - >**the intended contract** : birthdayGreeter function will accept two arguments: one of type string and one of type number. The function will return a string
1. Structural typing
     
     Two elements are considered identical to one another if, for each feature within the type of the first element, a corresponding and identical feature exists within the type of the second element.
       ```javascript
     
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
        ```