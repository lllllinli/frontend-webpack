/* eslint-disable react/jsx-indent,react/jsx-filename-extension */
import React from 'react';
import ReactDOMServer, { renderToNodeStream } from 'react-dom/server';
import ReactDOM from 'react-dom/server';

import Html from '../reactApp/Html';
import App from '../reactApp/ReactApp';


const path = '/react-ssr';

const initialData = {
  name: 'World',
};

const handler = (req, res) => {
  const initialDataString = JSON.stringify(initialData);

  renderToNodeStream(<Html initialData={initialDataString}>
      <App {...initialData} name="World!!" />
    </Html>)
    .pipe(res, { end: false }).on('end', () => {
    console.log('on end');
  });
};

const reactssrHandler = {
  path,
  handler,
};

export default reactssrHandler;
