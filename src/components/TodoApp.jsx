import { useState } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: true,
    },
    {
      id: 4,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 5,
      title: 'Develop website and add content',
      completed: false,
    },
  ]);

  const [message, setMessage] = useState('');

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
  console.log(todos);

  return (
    <>
      <Header />
      <InputTodo setMessage={setMessage} addTodo={addTodo} />
      <span>{message}</span>
      <TodoList
        todos={todos}
        handleCheck={handleCheck}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TodoApp;
