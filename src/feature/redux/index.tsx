import { Provider } from 'react-redux';
import { App } from './App';

import { store } from './store';

export const Redux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
