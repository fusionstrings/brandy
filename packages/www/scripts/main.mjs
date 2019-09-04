import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.mjs';
import { mountNode, brand } from './mount-data.mjs';

ReactDOM.render(<Root brand={brand} />, mountNode);
