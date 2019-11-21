import jspmRollup from 'rollup-plugin-jspm';
import babel from "rollup-plugin-babel";
import url from "rollup-plugin-url";
import postCss from 'rollup-plugin-postcss';

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export default {
  // Leading "./" still important here
  input: ["./scripts/main.mjs"],
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
    jspmRollup(),
    postCss(),
    url(),
    babel({
      exclude: ['/node_modules/@babel/**'],
      rootMode: 'upward'
    })
  ]
};
