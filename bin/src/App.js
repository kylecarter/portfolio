import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const App = () => (
  <div id="app">
    {renderRoutes(routes)}
  </div>
);

export default App;
