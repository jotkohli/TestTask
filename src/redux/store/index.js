import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['Profile'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

export default store;