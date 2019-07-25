const jspmResolve = require('@jspm/resolve');
const { resolved, format } = jspmResolve.sync('@fusionstrings/ansac', process.cwd());
console.log(`@fusionstrings/ansac resolved to file ${resolved} and format is ${format}`);