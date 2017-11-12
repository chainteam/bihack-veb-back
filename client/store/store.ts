import { applyMiddleware, compose, createStore, Store as ReduxStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

interface IWindow {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare const window: IWindow;

class Store {
    private store;
    private initialStore = {};
    private middleware = [ thunk ];

    constructor() {
        this.createStore();
    }

    get() {
        return this.store;
    }

    private createStore() {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        this.store = createStore(
            reducer,
            this.initialStore,
            composeEnhancers(
                applyMiddleware(...this.middleware),
            ),
        );
    }
}

export default Store;
