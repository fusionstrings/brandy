import React from 'https://dev.jspm.io/react';
// import B from '@fusionstrings/drftless/components/driftless.mjs';
const Brands = {
    ansac: React.lazy(() => import('../../ansac/components/ansac.js')),
    charbay: React.lazy(() => import('../../charbay/components/charbay.js')),
    driftless: React.lazy(() => import('../../driftless/components/driftless.js'))
}

function Root({brand}){
    const Brand = Brands[brand];
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <h1>hu</h1>
            {/* <B /> */}
            <Brand />
        </React.Suspense>
    )
}

export default Root;