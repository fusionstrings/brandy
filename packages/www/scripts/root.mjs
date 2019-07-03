import React from 'https://dev.jspm.io/react';
// import B from '@fusionstrings/drftless/components/driftless.mjs';
const Brands = {
    ansac: React.lazy(() => import('@fusionstrings/ansac/components/ansac.mjs')),
    charbay: React.lazy(() => import('@fusionstrings/charbay/components/charbay.mjs')),
    driftless: React.lazy(() => import('@fusionstrings/drftless/components/driftless.mjs'))
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