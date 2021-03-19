const express = require('express'); // todo import express from 'express'; // { Request, Response }
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.post('/login', (req: any, res: any) => {
  // console.log('req', req);
  // console.log('res', res);
  const data = {
    success: true
  }
  res.send(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

export {};
