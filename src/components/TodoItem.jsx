/* eslint-disable react/prop-types */
const TodoItem = ({ todo, handleCheck, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          handleCheck(todo.id);
        }}
      />

      {todo.title}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
