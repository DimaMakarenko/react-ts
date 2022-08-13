import { ReactElement, useEffect } from 'react';
import { useTSelector, useActions } from '../../hooks';
import { ListWrapper } from 'feature/redux/components/ListWrapper';

type TableCellProps = { children: ReactElement | string };

export const Users: React.FC = () => {
  const { users, loading, error } = useTSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Td = ({ children }: TableCellProps) => (
    <td className="border-b border-slate-100 border-slate-700 p-4 pl-8 text-slate-500 text-slate-500">
      {children}
    </td>
  );
  const Th = ({ children }: TableCellProps) => (
    <td className="border-b border-slate-100 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600  text-left">
      {children}
    </td>
  );

  return (
    <ListWrapper loading={loading} error={error}>
      <div className="relative rounded-xl overflow-auto">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr className="bg-slate-100">
              <Th>Name</Th>
              <Th>User name</Th>
              <Th>Email</Th>
            </tr>
          </thead>
          <tbody className="bg-white bg-slate-0">
            {users.map(({ id, name, username, email }) => (
              <tr key={id}>
                <Td>{name}</Td>
                <Td>{username}</Td>
                <Td>{email}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListWrapper>
  );
};
