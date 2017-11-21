import path from 'path';
import express from 'express';
import helmet from 'helmet';

import router from './server/router/router';

const isDev = () => process.env.NODE_ENV === 'dev';
const app = express();
let port = 3000;

if (!isDev()) {
  port = 80;
}

const publicPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'server', 'views');

app.set('views', viewsPath);

app.set('view engine', 'ejs');

app.use(helmet());

app.use('/static', express.static(publicPath));

app.use('/', router);


app.listen(port, () => {
  console.log(`Example app listening on port: ${port}! \nurl: http://localhost:${port}/`);
});
