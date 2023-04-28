// using the import statement will lead to the req and res to automatically
// infer the types

import express from 'express';
import { Operation, calculator } from './calculator';

const app = express();

app.use(express.json());

app.get('/ping', (_req , res) => {
  res.send('pong');
});

app.post('/calculator',(req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
  const {value_1,value_2,operation} = req.body;
  
  const result = calculator(Number(value_1),Number( value_2), operation as Operation); 
  
  res.send({result});
  
});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


