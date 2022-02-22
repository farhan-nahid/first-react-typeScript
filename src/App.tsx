import * as React from 'react';
import './App.css';
import Lists from './components/lists';
import Todo from './components/todo';

const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <Lists />
      <Todo />
    </div>
  );
};

export default App;
