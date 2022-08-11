import { Provider } from 'react-redux';
import { UserList } from './components/UserList';
import { store } from './store';

export const Redux = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};
