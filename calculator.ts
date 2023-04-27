export type Operation = 'add'|'subtract'|'multiply'|'divide'

  interface MultiplyValues {
    value1: number;
    value2: number;
    operation:Operation;
  }

  const isOperation =(value :string) :value is Operation =>{
  return (operation ==='add' || operation === 'subtract' || operation === 'multiply' || operation === 'divide')

  }
  
  const isValidArgs = (args:string[]) =>{
      
    return (isNaN(Number(args[2])) || isNaN(Number(args[3])) )
    
     
  }

  const parseArguments = (args: string[]): MultiplyValues => {
    
    if (args.length < 5) throw new Error('Not enough arguments');
    if (args.length > 5) throw new Error('Too many arguments');
  
    if (isValidArgs(args) && isOperation(args[4])) {
       
        return {
          value1: Number(args[2]),
          value2: Number(args[3]),
          operation : args[4] ,
        }

    } else {
      throw new Error('Provided values were not numbers!');
    }
  }

const calculator=(a:number,b:number,operation:Operation):number =>{ //number|string ( return type if returning string too)

    switch(operation){
      case 'add' :
        return a+b;
      case 'subtract':
        return a-b;
      case 'multiply':
        return a*b;
      case 'divide':
        // to account for the fact that the function might return a string , we need to put the return values likewise 
        // if(b===0) return "division cannot be performed"
        if(b===0) throw new Error("division cannot be performed")
        return a/b;
      //(to be use in case of internal values) default:
      
      // this ensure that if a new operation is added to the operation type , a corresponding switch statement is always added to correspond to it , else the exhaustiveCheck will catch it .
      
      //   const exhaustiveCheck: never = operation;
      //   return exhaustiveCheck;

       default: // to be used in case of external values , i.e the value for `operation` is coming from an external api, which is not guaranteed to be of given type.

      throw new Error('Operation is not multiply, add or divide!');
      // this is to be caught by the calling code using try-catch
    }

}

// const isError = (err: unknown): err is Error=>{
   
//    return err instanceof Error
// }
const {value1,value2,operation} = parseArguments(process.argv)

console.log(calculator(value1,value2 , operation as Operation));
