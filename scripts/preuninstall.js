const Serverless = require('../lib/Serverless');

const serverless = new Serverless();

(() => {
  serverless.init().then(() => {
    serverless.utils.logStat(serverless, 'uninstall').catch(() => Promise.resolve());
  });
})();
