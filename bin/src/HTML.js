import React from "react";
import PropTypes from "prop-types";

const HTML = (props) => {
  const { html, serverState } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__SERIALIZED_STATE__ = JSON.stringify(${serverState})`,
          }}
        />
        <script type="application/javascript" src="/static/main.scripts.js" />
      </body>
    </html>
  );
};

HTML.propTypes = {
  html: PropTypes.string.isRequired,
  serverState: PropTypes.object,
};

HTML.defaultProps = {
  serverState: {},
};

export default HTML;
