import React from 'react';
import ReactDom from 'react-dom';

import App from '@app';

const root = document.getElementById('root');

const main = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDom.render(main, root);
