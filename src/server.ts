import express, { Request, Response } from 'express';

const app = express();

app.get('/ads', (req: Request, res: Response) => {
  console.log('Acessou Ads!')
  return res.json({success: true});
});

app.listen(3333, () => console.log('Server listening on host http://localhost:3333'));