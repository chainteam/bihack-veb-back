import * as React from 'react';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import * as enUS from 'antd/lib/locale-provider/en_US';

import AppContainer from '../routes';
import store from '../store';
const locale: any = enUS;

const App = (Component) => {
    return class Application extends React.Component<any, any> {
        render() {
            return (
                <Provider store={store}>
                    <LocaleProvider locale={locale}>
                        <Component />
                    </LocaleProvider>
                </Provider>
            );
        }
    };
};

export default App(AppContainer);
