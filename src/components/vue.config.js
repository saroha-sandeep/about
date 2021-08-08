/* eslint-disable linebreak-style */
module.exports = {
  configureWebpack: (config) => {
    const CONFIG = config;
    if (process.env.NODE_ENV === 'production') {
      CONFIG.publicPath = '';
    } else {
      // mutate for development...
    }
    return CONFIG;
  },
};
