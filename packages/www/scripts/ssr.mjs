import React from 'react';
import ReactDOMServer from 'react-dom/server';

function App(){
    return (
        <h1>Hello</h1>
    )
}

function hello(r) {
    r.status = 200;
    r.headersOut['Content-Type'] = 'text/html';
    r.sendHeader();
    r.send(ReactDOMServer.renderToStaticMarkup(<App />))
    r.finish();
    // r.return(200, markup);
}
export default hello;