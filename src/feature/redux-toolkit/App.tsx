import { ReactElement } from 'react';
import { Users } from './feature/Users';

export const App = (): ReactElement => {
  return (
    <div>
      Redux toolkit
      <div>
        <Users />
      </div>
    </div>
  );
};
