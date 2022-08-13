import { ReactElement } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

type ListWrapperProps = {
  children: ReactElement | ReactElement[];
  loading: boolean;
  error: string | null;
};
export const ListWrapper = ({ children, error, loading }: ListWrapperProps): ReactElement => {
  return (
    <div>
      {loading && <CircularProgress />}
      {error && <div>{error}</div>}
      {!loading && !error && <>{children}</>}
    </div>
  );
};
