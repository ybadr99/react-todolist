import { useEffect, useState } from 'react';

import Header from './Header';
import TodoItem from './TodoItem';

import InputTodo from './InputTodo';
const TodoApp = () => {
  const [message, setMessage] = useState('');
  const getData = () => {
    const data = localStorage.getItem('todos');

    return JSON.parse(data) || [];
  };

  const [todos, setTodos] = useState(getData());
  const handleCheck = (id) => {
    setTodos((preState) =>
      preState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      })
    );
  };

  const addTodo = (title) => {
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, t) => {
    setTodos((preState) =>
      preState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: t,
          };
        }

        return todo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos">
      <Header />
      <InputTodo setMessage={setMessage} addTodo={addTodo} />
      <span className="submit-warning">{message}</span>

      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCheck={handleCheck}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
