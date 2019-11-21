import React from 'react';
// import B from '@fusionstrings/driftless/components/driftless.mjs';
const Brands = {
    ansac: React.lazy(() => import('@fusionstrings/ansac/components/ansac.mjs')),
    charbay: React.lazy(() => import('@fusionstrings/charbay/components/charbay.mjs')),
    driftless: React.lazy(() => import('@fusionstrings/driftless/components/driftless.mjs'))
}

function Root({brand}){
    const Brand = Brands[brand];
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <h1>Brandy</h1>
            {/* <B /> */}
            <Brand />
        </React.Suspense>
    )
}

export default Root;