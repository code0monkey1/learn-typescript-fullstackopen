export type Operation = 'add'|'subtract'|'multiply'|'divide'



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
      
    }

}


console.log(calculator(4,3,'add'))