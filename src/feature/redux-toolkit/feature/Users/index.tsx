import { useTDispatch, useTSelector } from 'feature/redux-toolkit/hooks';
import { fetchUsers } from 'feature/redux-toolkit/store/reducers/actions';
import { ReactElement, useEffect } from 'react';

export const Users = (): ReactElement => {
  const { users } = useTSelector((state) => state.usersReducer);
  const dispatch = useTDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
};
