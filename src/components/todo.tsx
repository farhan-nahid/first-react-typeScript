import * as React from 'react';

interface ITodoProps {
  id: number;
  name: string;
}

type ActionType = { type: 'ADD'; name: string } | { type: 'REMOVE'; id: number };

const Todo: React.FunctionComponent = () => {
  const todoNameRef = React.useRef<HTMLInputElement>(null);

  // reducer function

  const reducer = (state: ITodoProps[], action: ActionType) => {
    switch (action.type) {
      case 'ADD':
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
          },
        ];
      case 'REMOVE':
        return state.filter(({ id }) => id !== action.id);

      default:
        return state;
    }
  };

  const getLocalItems = (): [] => {
    const todo: string | null = localStorage.getItem('pTodo');
    if (todo) {
      return JSON.parse(todo);
    } else {
      return [];
    }
  };

  const [allTodo, dispatch] = React.useReducer(reducer, getLocalItems());

  const handelAddTodo = React.useCallback(() => {
    if (todoNameRef.current) {
      dispatch({ type: 'ADD', name: todoNameRef.current.value });
      todoNameRef.current.value = '';
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('pTodo', JSON.stringify(allTodo));
  }, [allTodo]);

  return (
    <div>
      <h1>All Todo</h1>
      <input type='text' placeholder='Name of Todo' ref={todoNameRef} />
      <button onClick={handelAddTodo}>Add</button>

      <ul>
        {allTodo.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => dispatch({ type: 'REMOVE', id: todo.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
