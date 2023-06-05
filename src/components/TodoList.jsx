/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';
const TodoList = ({ todos, handleCheck, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
