import { Todo } from 'feature/redux/components';
import { ListWrapper } from 'feature/redux/components/ListWrapper';
import { ReactElement, useEffect } from 'react';
import { useActions, useTSelector } from '../../hooks';

export const Todos = (): ReactElement => {
  const { todos, error, limit, loading, page } = useTSelector((state) => state.todo);
  const { fetchTodos } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <ListWrapper loading={loading} error={error}>
      <>
        <>
          <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
              <div className="mb-4">
                <h1 className="text-grey-darkest">Todo List</h1>
                <div className="flex mt-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add Todo"
                  />
                  <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal-100 hover:text-white hover:bg-teal-100">
                    Add
                  </button>
                </div>
              </div>
              <div>
                {todos.map((todo) => (
                  <Todo {...todo} key={todo.id} />
                ))}
              </div>
            </div>
          </div>
        </>
      </>
    </ListWrapper>
  );
};
