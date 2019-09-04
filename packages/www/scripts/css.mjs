
import { brand } from './mount-data.mjs';

const css = {
    ansac: import('@fusionstrings/ansac/style.mjs'),
    charbay: import('@fusionstrings/charbay/style.mjs'),
    driftless: import('@fusionstrings/driftless/style.mjs')
}
// const css = {
//     ansac: import('@fusionstrings/ansac/styles/style.scss'),
//     charbay: import('@fusionstrings/charbay/styles/style.scss'),
//     driftless: import('@fusionstrings/driftless/styles/style.scss')
// }
function loadStyle(){
  Promise.resolve(css[brand]);
}

loadStyle();
