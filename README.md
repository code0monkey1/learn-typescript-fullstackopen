# learn-typescript-fullstackopen

### TypeScript consists of three parts :

1. The language :  
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
1. Type inference
     
      - Variables' type can be inferred based on their assigned value and their usage
     
          ```javascript
               const add = (a: number, b: number) => {
                /* The return value is used to determine
                   the return type of the function */
                return a + b;
                // inferred return type ( number )
              }
          ``` 
1. Type erasure 
      - i.e : No type information remains at runtime - nothing says that some variable x was declared as being of type SomeType
  
         >Input:
         >
         >let x: SomeType;

         >
         >Output After **Transpiling to .js** :
         >
         >
         >let x;

---

### Typescript Gotcha 
  
  + > Even though you many not see any Typescript compile time errors, you can still come in to some kind of runtime error.
    >
    > This generally is seen in typescript apps the app is dealing with data request from external api's , whose data is not _known_ or _properly defined_ by the developer in the client  APP. 
    >
    > So be **extremely careful while declaring types for the data retrieved from external API's**

---
### Typescript Language Quirks 
   
   1. Type Assertions :    
      - In some situations , typescript cannot know what type an element will convert to , in that case you can explicitly assert it to be of a specific type .
      - For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but _you might know that your page will always have an HTMLCanvasElement_ with a given ID.
  
        ```javascript
          
        const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
          
         // alternative syntax
        const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

        ```
      - TypeScript only allows type assertions which convert to a **more specific or less specific version of a type**. This rule _prevents “impossible” coercions_ like:
          
          `const x = "hello" as number;`

          >Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  
  1. Narrowing :
      
      1. **typeOf type Guards** : 
          1. "string"
          1. "number"
          1. "bigint"
          1. "boolean"
          1. "symbol"
          1. "undefined"
          1. "object"
          1. "function"    
   
         >Your need to confirm using `typeof` that a value is of a given type , to perform operations that are `specific to the given type`  

         ```javascript
          function padLeft(padding: number | string, input: string) {
            if (typeof padding === "number") {
             /* here we're only able to use repeat , 
              as padding is `confirmed to be a number` , 
              and not a string ,as the operation would be invalid 
              with `padding` having a string value.*/
             return " ".repeat(padding) + input;
                                  
            (parameter) padding: number
              }
              return padding + input;
                       
            (parameter) padding: string
          }   
         ```
      2. **Double-Boolean negation** : Put Double `!!` exclamation mark before any variable , to coerce it into a boolean value .
   
            >
            >!!"world"; // type: true,    value: true
            >
  
        + The following values are coerced to false 
           -  0
           -  NaN
           - "" (the empty string)
           - 0n (the bigint version of zero)
           - null
           - undefined