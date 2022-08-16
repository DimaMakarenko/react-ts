import { Provider } from 'react-redux';
import { App } from './App';
import { setupStore } from './store';

const store = setupStore();

export const ReduxToolkit = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
