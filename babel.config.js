const presets = [
  [
    "@babel/env"
    /* {
        targets: "last 2 Chrome versions" 
      } */
  ],
  "@babel/preset-typescript"
];

const plugins = [
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread",
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-transform-runtime"
];

module.exports = { presets, plugins };
