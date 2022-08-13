import { ReactElement, useEffect } from 'react';
import { useActions, useTSelector } from '../hooks';

export const TodoList = (): ReactElement => {
  const { todos, error, limit, loading, page } = useTSelector((state) => state.todo);
  const { fetchTodos } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) return <h1>Loading ...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
        // pagination
      ))}
    </div>
  );
};
