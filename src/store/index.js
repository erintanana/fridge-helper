import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import app from './app';
import products from './products';

export default function configureStore() {
    const navigationMiddleware = createReactNavigationReduxMiddleware(
        state => state.navigation,
    );

    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;

    const persistConfigs = {
        persistApp: {
            key: 'app',
            storage: AsyncStorage,
            blacklist: ['isLoading'],
        },
        persistProducts: {
            key: 'products',
            storage: AsyncStorage,
        },
    };

    const rootReducer = combineReducers({
        app: persistReducer(persistConfigs.persistApp, app),
        products: persistReducer(persistConfigs.persistProducts, products),
    });

    const store = createStore(
        rootReducer,
        {},
        composeEnhancers(applyMiddleware(navigationMiddleware, thunk)),
    );

    return store;
}
