/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';
const TodoList = ({ todos, handleCheck, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
