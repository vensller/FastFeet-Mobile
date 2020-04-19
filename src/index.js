import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';
import React from 'react';

import '~/config/ReactotronConfig';

import {store, persistor} from './store';
import App from '~/App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
        <App />
      </PersistGate>
    </Provider>
  );
}
