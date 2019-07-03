import React from 'https://dev.jspm.io/react';
import ReactDOM from 'https://dev.jspm.io/react-dom';
import Root from './root.mjs';

const root = document.getElementById('root');

ReactDOM.render(<Root brand={root.dataset.brand} />, root);
