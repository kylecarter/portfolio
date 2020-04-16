import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/Home';

const application = (
    <Home globalState={GLOBAL_STATE} />
)

ReactDOM.hydrate(application, document.getElementById('root'));
