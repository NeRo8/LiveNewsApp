import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './utils/navigation';

import store from './store/store';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
