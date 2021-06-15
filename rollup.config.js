import jspmRollup from 'rollup-plugin-jspm';
import babel from "rollup-plugin-babel";
import url from "rollup-plugin-url";
import postCss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';


const mode = process.env.NODE_ENV;
const dev = mode === "development";

export default {
  // Leading "./" still important here
  input: ["./packages/ansac/mod.mjs", "./packages/charbay/mod.mjs", "./packages/driftless/mod.mjs", "./packages/design-system/mod.mjs", "./packages/www/scripts/main.mjs"],
  output: [
    {
      dir: "dist/esm",
      format: "esm"
    }
  ],
  //context: 'window',
  plugins: [
    // resolve({
    //   browser: true
    // }),
    // babel({
    //   exclude: ['/node_modules/@babel/**'],
    //   rootMode: 'upward'
    // }),
    // commonjs({
    //   include: /node_modules/
    // })
    replace({
      'process.env.NODE_ENV': JSON.stringify(mode)
    }),
    jspmRollup(),
    postCss(),
    url(),
    babel({
      exclude: ['/node_modules/@babel/**'],
      rootMode: 'upward'
    }),
    // !dev && terser({
    //   module: true
    // })
  ]
};
