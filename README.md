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
  
 > Even though you many not see any Typescript compile time errors, you can still come in to some kind of runtime error.
    >
    > This generally is seen in typescript apps the app is dealing with data request from external api's , whose data is not _known_ or _properly defined_ by the developer in the client  APP. 
    >
    > So be **extremely careful while declaring types for the data retrieved from external API's**

---
### Typescript Language Quirks 
   
   1. ####  Type Assertions :    
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



  1. #### Narrowing :
      
      1. **typeOf type Guards** : 
          1. "string"
          2. "number"
          3. "bigint"
          4. "boolean"
          5. "symbol"
          6. "undefined"
          7. "object" ( Plain objects eg: {} | Classes | Interfaces | Enums | Arrays | Functions | Promises )
          8. "function"    
   
         >Your need to confirm using `typeof` that a value is of a given type , to perform operations that are `specific to` the `given type`  

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
      1. **Double-Boolean negation** : Put Double `!!` exclamation mark before any variable , to coerce it into a boolean value .
   
            >
            > const myVar = 'hello';  
            > const isTruthy = !!myVar; // true
            >
            > const myOtherVar = 0;  
            > const isTruthy2 = !!myOtherVar; //false   
            >
  
           + The following values are coerced to false 
              -  0
              -  NaN
              - "" (the empty string)
              - 0n (the bigint version of zero)
              - null
              - undefined
     
      1. **instanceof narrowing**
   
           - This only works for identifying `classes created using new` , which includes predefine classes like `Error` , `Object` , `Array`, `String`, `Number`, etc. It also works for  `user defined classes` eg : ` class Cat{ } `.  
           - `Does not work` for user defined `interfaces` or `types`

      1. **in operator narrowing**
           - JavaScript has an operator for determining if an object has a property with a name: the `in` operator.   
           - TypeScript takes this into account as a way to narrow down potential types.  
           - ```javascript
              type Fish = { swim: () => void };
              type Bird = { fly: () => void };
               
              function move(animal: Fish | Bird) {
                if ("swim" in animal) {
                  return animal.swim();
                }
               
                return animal.fly ();
              }
              
             ``` 
        1. **User defined type guards** 
           >A type guard is a function that returns a boolean value and has a special return type of       
            `variableName is Type`
            , where 
            variableName
             is the name of the variable being checked and 
            Type
             is the type you want to narrow it to.

             ```javascript
               interface Dog {
                  name: string;
                  breed: string;
                }
                
                interface Cat {
                  name: string;
                  color: string;
                }
                
                function isDog(animal: Dog | Cat): animal is Dog {
                  return (animal as Dog).breed !== undefined;
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
                printAnimal(myCat); // "Whiskers is a gray cat"
             ```
            + In this example, we have two custom defined types: 
                    `Dog
                     and 
                    Cat`
                    . We also have a function called 
                    `isDog`
                     that takes an 
                    animal
                     parameter of type 
                    Dog | Cat and returns a boolean value. The   `function checks if` the 
                    animal
                     `parameter is a Dog by checking if it has a breed property`.
            + We then have a 
                `printAnimal`
                 function that takes an 
                animal
                 parameter of type 
               `Dog | Cat`
                . Within the function, we use the 
                `isDog`
                 type guard to `narrow the type of 
                animal
                 to 
                Dog`
                 if it is a dog, or to 
                Cat
                 if it is a cat. We can `then safely access` the `properties` of the 
                animal
                 object `based on its type`.
      
      1. **Discriminated Union**
         
         - Using a discriminated union, and can narrow out the members of the union.
   
            ```javascript
              interface Circle {
                  kind: "circle";
                  radius: number;
                }
                 
                interface Square {
                  kind: "square";
                  sideLength: number;
                }
                 
                type Shape = Circle | Square;

              function getArea(shape: Shape) {
                  switch (shape.kind) {
                    case "circle":
                      return Math.PI * shape.radius ** 2;
                                        
                       // shape: Circle
                      case "square":
                        return shape.sideLength ** 2;
                                
                     // shape: Square
                    }
                }

            ```
          - In this case, `kind` was that _common property_ (which is what’s considered a discriminant property of Shape). Checking whether the kind property was "circle" got rid of every type in Shape that didn’t have a kind property with the type _"circle"_. That `narrowed shape down to the type Circle`. 
          -  From there, the type system was able to do the “right” thing and figure out the types in each branch of our switch statement.
        

      1. **Exhaustiveness checking**

          - >The
          **never
          type** :
          When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to _**represent a state which shouldn’t exist**_.

          - `Using 
          never`
           `in` the 
          `default
           case` is a powerful `way to ensure that our code is exhaustive` and `catches errors at compile-time`.

              ```javascript
              type Color = 'red' | 'green' | 'blue';

            function getColorName(color: Color) {
                switch (color) {
                  case 'red':
                    return 'Red';
                  case 'green':
                    return 'Green';
                  case 'blue':
                    return 'Blue';
                  default:
                    const exhaustiveCheck: never = color;
                    return exhaustiveCheck;
                }
            }
              ```
        - If we were to `add` a new color to the 
          `Color
           type, say 'yellow'`, and `forget to add a corresponding case` in the switch statement, TypeScript would throw a `compile-time error`. This is because we have not covered all possible cases of the 
          Color
           type, and TypeScript wants `to ensure that we handle all cases`.  
          
          >`Error : Type 'Yellow' is not assignable to type 'never'.`    

     ---
     
     >Tip : To ignore any typescript error , if you don't find a quick fix for it ... just put `//@ts-ignore` on top of the line giving the ts `error`   
     ![ignore-typescript-errors](./pics/ignore-typescript-error.jpg)
      
      ---
 ## CONFIG 
  
1. By using the npm package `ts-node`. It compiles and `executes` the specified `TypeScript file immediately` so that there is `no` need for a `separate compilation step`. ( Good for testing , but not to be used in production) 
   <br/>
   <br/>
   
      -  You can `install` both `ts-node` and the official `typescript` package `globally` by running
         ```bash 
              npm install -g ts-node typescript       
         ```
1. Add a configuration file `tsconfig.json` to the project with the following content.  
  The tsconfig.json file is used to 
   + define how the TypeScript compiler should interpret the code
   +  how strictly the compiler should work
   +  which files to watch or ignore
   
    ```json
             {
          "compilerOptions":{
            "noImplicitAny": false // this will allow  'any' type to exist . 
                                   // If this is turned to true ,you will have to explicitly specify every type
          }
        }
    ```
 1. You can directly use `ts-node` to execute a `typescript` file like so : `ts-node test.ts` OR you could install `ts-node` as a `dev-dependency` and run it using an `npm script` in `package.json`  , like so : `npm run ts-node test.ts`
    
      ```json
  
     // package.json:  
           {
  
          "scripts": {
            "ts-node": "ts-node"
            },
          
          }
  
      ```

>  The VSCode plugin is so efficient, that it informs you immediately when you are trying to use an incorrect type.

\-\-\-    
[multiplication with correct and incorrect arguments](./multiplicator.ts)   
\-\-\- 

---

## Creating Custom Types :   

Eg : `type Operation = 'multiply' | 'add' | 'divide';`

Where ever you use this as a type , you'll have to provide either of the 3 values specified , for it to be a valid assignment.

> `Quick Tip` : So if, for example, your values comes from an external interface, there is no definite guarantee that it will be one of the allowed values , specified by you in the type definition.  
> 
> Therefore, it's still better to include error handling and be prepared for the unexpected to happen, when getting data from external sources.

## Error Handling in TypeScript : 

> _*Unknown* :  The `unknown` is a `type` that was introduced to be the type-safe counterpart of `any`._  
> 
> _Anything is assignable to unknown, but `unknown isn’t assignable to anything but itself and any` without a type assertion or a control flow-based narrowing. Likewise, no `operations are permitted on an unknown without first asserting or narrowing it` to a more specific type._


The `default type` of the `error object` in TypeScript is `unknown`.   
So we have to `narrow the type` to access the `message` field like so :
   
   ```javascript
     try{

     }
     catch (error: unknown) {

      let errorMessage = 'Something went wrong: '

      // here we can not use error.message
      
      //Here the narrowing was done with the instanceof type guard   
      if (error instanceof Error) { 
     
        //  narrowing through type assertion will also work
        
        //  const err =error as Error
        //  console.log(err.message)

        // the type is now narrowed to Error and we can refer to error.message
         errorMessage += error.message;
        }

        // here we can not use error.message
    
        console.log(errorMessage);
    }

   ```