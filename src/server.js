import open from 'open';

import path from 'path';
import express from 'express';
import helmet from 'helmet';

const isDev = () => process.env.NODE_ENV === 'dev';
const app = express();
let port = 3000;

if (!isDev()) {
  port = 80;
}

const publicPath = path.join(__dirname, 'public');

app.use(helmet());

app.use('/static', express.static(publicPath));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}!`);
  open(`http://localhost:${port}/`);
});
