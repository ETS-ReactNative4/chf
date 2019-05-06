import express from 'express';
import path from 'path';
import { isApiExternal } from './net';
import modules from './modules';
import websiteMiddleware from './middleware/website';
import graphiqlMiddleware from './middleware/graphiql';
import createGraphServer from './graphql';
import errorMiddleware from './middleware/error';
import { createStich } from './api/remoteSchema';

const createExpressApp = async () => {
  const app = express();

  for (const applyBeforeware of modules.beforewares) {
    applyBeforeware(app);
  }
  // console.log('TEST::::');
  // Don't rate limit heroku
  app.enable('trust proxy');

  const corsOptions = {
    credentials: true,
    origin: true
  };

  for (const applyMiddleware of modules.middlewares) {
    applyMiddleware(app);
  }

  if (__DEV__) {
    app.get('/servdir', (req, res) => {
      res.send(process.cwd() + path.sep);
    });
  }

  if (!isApiExternal) {
    const graphqlServer = await createGraphServer();
    graphqlServer.applyMiddleware({
      app,
      path: __API_URL__,
      cors: corsOptions
    });
  }
  await createStich;
  app.get('/graphiql', (...args) => graphiqlMiddleware(args[0])(...args));

  // For monitoring status
  app.get('/status', (req, res) => res.status(200).send());
  app.use((...args) => websiteMiddleware(...args));
  app.use(express.static('public'));

  app.use(
    '/',
    express.static(__FRONTEND_BUILD_DIR__, {
      maxAge: '180 days'
    })
  );

  if (__DEV__) {
    app.use('/', express.static(__DLL_BUILD_DIR__, { maxAge: '180 days' }));
    app.use(errorMiddleware);
  }

  if (module.hot) {
    module.hot.accept(['./middleware/website', './graphql']);
  }

  return app;
};

export default createExpressApp;
