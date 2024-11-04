import * as Express from 'express';

const app = Express();

app.get('/', (_req: Express.Request, res: Express.Response) => {
  res.send('Hello World!');
});

app.listen(4000, () => {
  console.log('server started at http://localhost:4000');
});
