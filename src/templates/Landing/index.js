import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../../pages/Home'

export default (data) => {

    const GLOBAL_STATE = {
        meta: data.meta,
        content: data.content,
    };

    const application = (
        <Home globalState={GLOBAL_STATE} />
    );

    const html = renderToString(application);

    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      var GLOBAL_STATE = ${JSON.stringify(GLOBAL_STATE)};
    </script>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#20370f" />
    <meta
      name="description"
      content="A website showcasing the development skills of Kyle A. Carter"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <title>${GLOBAL_STATE.meta.title}</title>
  </head>
  <body>
    <noscript>It would be a lot cooler if you had Javascript enabled.</noscript>
    <div id="root">${html}</div>
    <script src="../entry.js"></script>
  </body>
</html>
  `
}
