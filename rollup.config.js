import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import jspmRollup from 'rollup-plugin-jspm';
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export default {
  // Leading "./" still important here
  input: ["./packages/www/scripts/main.js"],
  output: [
    {
      dir: "dist/esm",
      format: "esm"
    }
  ],
  context: 'window',
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
    jspmRollup(),
    babel({
      exclude: ['/node_modules/@babel/**'],
      rootMode: 'upward'
    })
    
  ]
};
