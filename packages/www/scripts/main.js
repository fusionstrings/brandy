import React from 'https://dev.jspm.io/react';
import ReactDOM from 'https://dev.jspm.io/react-dom';
import Root from './root.js';

const root = document.getElementById('root');

ReactDOM.render(<Root brand={root.dataset.brand} />, root);
