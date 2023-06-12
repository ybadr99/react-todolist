import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

/* eslint-disable react/prop-types */
const TodoItem = ({ todo, handleCheck, deleteTodo, editTodo }) => {
  const [editing, setEditing] = useState(false);

  let itemStyle;
  if (editing) {
    itemStyle = { background: editing ? '#fffeca ' : '' };
  } else {
    itemStyle = {};
  }

  return (
    <li className="item" style={itemStyle}>
      <div className="content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            handleCheck(todo.id);
          }}
        />

        <input
          style={{ textDecoration: todo.completed ? 'line-through' : '' }}
          value={todo.title}
          className="item-title"
          onChange={(e) => editTodo(todo.id, e.target.value)}
          onFocus={() => setEditing(true)}
          onBlur={() => setEditing(false)}
        />
        <button onClick={() => deleteTodo(todo.id)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
