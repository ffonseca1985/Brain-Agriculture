const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ];
  
  const plugins = [
    [
      "module-resolver",
      {
        alias: {
          "@controllers": "./src/controllers/",
          "src": "./src/"
        },
      },
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    'babel-plugin-transform-typescript-metadata'
  ];
  
  module.exports = {
    presets,
    plugins,
    ignore: ["**/*.spec.ts"],
  };
  