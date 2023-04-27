
// after turning noImplicitAny to true ,you need to manually
// put types on  all relevant variable declarations
const multiplicator = (a:number, b:number, printText:string) => {
  console.log(printText,  a * b);
};
// will return NaN ( in case wrong type is input)

// multiplicator("Lonely", 4, 'Multiplied a string and 4, the result is:');


multiplicator(5,4,"The result of the multiplication is :");