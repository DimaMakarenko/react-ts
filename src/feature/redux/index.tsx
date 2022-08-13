import { Provider } from 'react-redux';
import { TodoList } from './components/TodoList';
import { UserList } from './components/UserList';
import { store } from './store';
export const Redux = () => {
  return (
    <Provider store={store}>
      <UserList />
      <hr />
      <TodoList />
    </Provider>
  );
};
