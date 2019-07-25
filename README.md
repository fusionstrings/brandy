# brandy
A brand factory

Relevant issue https://github.com/jspm/rollup-plugin-jspm/issues/9

```sh
# reproduce the issue
yarn install
yarn build

# to see jspm resolve statur
yarn resolve
```
Example repo with using this plugin with [Yarn Workspace](https://yarnpkg.com/en/docs/workspaces) in conjunction of `.js` file extension and babel. 


- [no-workspace branch](https://github.com/fusionstrings/brandy/tree/no-workspace) builds fine. It uses `.js` extension. **_This branch doesn’t use yarn workspace_**
- [master branch](https://github.com/fusionstrings/brandy/tree/master) builds fine. It uses `.mjs` extension. **_This branch uses yarn workspace._**
- [error-with-workspace branch](https://github.com/fusionstrings/brandy/tree/error-with-workspace) doesn’t build with following error. It uses (mix) of`.js` extension. Although mix doesn’t matter, error is same even if all the workspace files are `.js`. **_This branch uses yarn workspace._**

The reason is https://babeljs.io/docs/en/options#sourcetype.


```sh
[!] (plugin jspm-rollup) SyntaxError: /Users/dilip/github/@fusionstrings/brandy/packages/ansac/components/ansac.js: 'import' and 'export' may appear only with 'sourceType: "module"' (1:0)
Consider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.

> 1 | import React from 'https://dev.jspm.io/react';
    | ^
  2 | 
  3 | function Ansac() {
  4 |   return (
../ansac/components/ansac.js (1:0)
SyntaxError: /Users/dilip/github/@fusionstrings/brandy/packages/ansac/components/ansac.js: 'import' and 'export' may appear only with 'sourceType: "module"' (1:0)
Consider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.

> 1 | import React from 'https://dev.jspm.io/react';
```
I am raising this issue as a question on why `rollup-plugin-jspm` expects `.mjs` with workspace and doesn’t care otherwise?