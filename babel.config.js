module.exports = {
  sourceMap: true,
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        modules: "false",
        shippedProposals: true,
        targets: {
          esmodules: true
        },
        corejs: {
          version: 3,
          proposals: true
        },
        debug: false
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
      "@babel/plugin-syntax-dynamic-import"
  ]
};
