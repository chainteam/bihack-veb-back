import * as React from 'react';
import { Provider } from 'react-redux';

import AppContainer from '../routes';
import store from '../store';

const App = (Component) => {
    return class Application extends React.Component<any, any> {
        render() {
            return (
                <Provider store={store}>
                    <Component />
                </Provider>
            );
        }
    };
};

export default App(AppContainer);
