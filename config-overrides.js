const rewireEslint = require('react-app-rewire-eslint');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');


module.exports = function override(config, env) {
  const esLintConfig = rewireEslint(config, env);
  const hotLoaderConfig = rewireReactHotLoader(config, env);
  return { ...esLintConfig, ...hotLoaderConfig };
};
