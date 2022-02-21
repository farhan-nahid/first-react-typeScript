import * as React from 'react';

interface ISingleListProps {
  lists: string[];
  handleAlert: (text: string) => void;
}

const SingleList: React.FunctionComponent<ISingleListProps> = ({ lists, handleAlert }) => {
  return (
    <ul>
      {lists.map((list, idx) => (
        <li key={idx}>
          {list} <button onClick={() => handleAlert(list)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default SingleList;
