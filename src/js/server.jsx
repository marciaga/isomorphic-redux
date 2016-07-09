import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createHistory';
import routes from './shared/routes';
import { configureStore } from './configure-store';
import { Provider } from 'react-redux';

const app = express();

app.use((req, res) => {
    const location = createLocation(req.url);
    const store = configureStore({});

    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }
        if (!renderProps) {
            return res.status(404).end('Not found.');
        }

        const InitialComponent = (
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        );
        const initialState = store.getState();
        const componentHTML = renderToString(InitialComponent);
        const jsAssetSource = process.env.NODE_ENV === 'production' ? 'js' : 'http://localhost:8080/assets';
        const cssAssetSource = process.env.NODE_ENV === 'production' ? 'css' : 'http://localhost:8080/assets';
        const HTML = `<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Isomorphic Redux Demo</title>
                    <script type="application/javascript">
                        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                    </script>
                    <link rel="stylesheet" href="${cssAssetSource}/main.css" />
                </head>
                <body>
                    <div id="app">${componentHTML}</div>
                    <script src="${jsAssetSource}/bundle.js"></script>
                </body>
            </html>`;

        res.end(HTML);
    });
});
export default app;
