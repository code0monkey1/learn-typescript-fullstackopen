export type Operation = 'add'|'subtract'|'multiply'|'divide'



const calculator=(a:number,b:number,operation:Operation):number|string =>{

    
    switch(operation){
      case 'add' :
        return a+b;
      case 'subtract':
        return a-b;
      case 'multiply':
        return a*b;
      case 'divide':
        // to account for the fact that the function might return a string , we need to put the return values likewise 
        if(b===0) return "division cannot be performed"
        return a/b;
      default:
        // this ensure that if a new operation is added to the operation type , a corresponding switch statement is always added to correspond to it , else the exhaustiveCheck will catch it .
        const exhaustiveCheck: never = operation;
        return exhaustiveCheck;
    }

}


console.log(calculator(4,3,'add'))