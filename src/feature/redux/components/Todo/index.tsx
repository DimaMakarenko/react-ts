import { ReactElement } from 'react';
import { Todo as TodoType } from '../../types';

const Completed = ({ children }: { children: string }) => (
  <p className="w-full text-grey-darkest">{children}</p>
);
const NotCompleted = ({ children }: { children: string }) => (
  <p className="w-full line-through text-green-500">{children}</p>
);

const DoneButton = () => (
  <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">
    Done
  </button>
);
const NotDoneButton = () => (
  <button className="whitespace-nowrap p-2 ml-4 mr-2 border-2 rounded hover:text-white text-blue-500 border-blue-500 hover:bg-blue-500">
    Not Done
  </button>
);
export const Todo = ({ title, completed }: TodoType): ReactElement => {
  return (
    <div className="flex mb-4 items-center">
      {completed ? <Completed>{title}</Completed> : <NotCompleted>{title}</NotCompleted>}
      {completed ? <NotDoneButton /> : <DoneButton />}
      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
        Remove
      </button>
    </div>
  );
};
