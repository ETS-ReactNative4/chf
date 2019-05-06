import http from 'http';
import addGraphQLSubscriptions from './api/subscriptions';

import { serverPort } from './net';
import createExpressApp from './app';
import log from '../../common/log';

const spinServer = async () => {
  // eslint-disable-next-line import/no-mutable-exports
  const app = await createExpressApp();
  let server;

  server = http.createServer();
  server.on('request', app);

  addGraphQLSubscriptions(server);

  server.listen(serverPort, () => {
    log.info(`API is now running on port ${serverPort}`);
  });

  server.on('close', () => {
    server = undefined;
  });

  if (module.hot) {
    module.hot.dispose(() => {
      try {
        if (server) {
          console.log('server close');
          server.close();
        }
      } catch (error) {
        log(error.stack);
      }
    });
    module.hot.accept(['./app'], () => {
      server.removeAllListeners('request');
      server.on('request', app);
    });
    module.hot.accept(['./api/subscriptions'], () => {
      try {
        addGraphQLSubscriptions(server);
      } catch (error) {
        log(error.stack);
      }
    });

    module.hot.accept();
  }

  return server;
};

export default spinServer;
