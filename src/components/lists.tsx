import * as React from 'react';
import SingleList from './singleList';

interface IListsProps {}

const Lists: React.FunctionComponent<IListsProps> = (props) => {
  const lists: string[] = ['Farhan', 'Ahmed', 'Nahid'];
  const handleAlert = (text: string) => alert(text);

  return (
    <div>
      <h1>Lists</h1>
      <SingleList lists={lists} handleAlert={handleAlert} />
    </div>
  );
};

export default Lists;
