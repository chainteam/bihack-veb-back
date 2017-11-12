import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('application'),
    );
};

render(App);

interface RequireImport {
    default: any;
}

declare var module: any;
if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default;
        render(NextApp);
    });
}
