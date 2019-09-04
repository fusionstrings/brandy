import jspmRollup from 'rollup-plugin-jspm';
import babel from "rollup-plugin-babel";

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
