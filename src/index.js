import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import Index from './screens';
import configureStore from './store';

const store = configureStore();
const persistor = persistStore(store);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
};

export default App;
