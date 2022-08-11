import { useEffect } from 'react';
import { useTSelector, useActions } from '../../hooks';

export const UserList: React.FC = () => {
  const { users, loading, error } = useTSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <h1>Loading ...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
