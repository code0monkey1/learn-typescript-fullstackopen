// using the import statement will lead to the req and res to automatically
// infer the types

import express from 'express';

const app = express();

app.get('/ping', (_req , res) => {
  res.send('pong');
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


