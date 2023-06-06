import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const InputTodo = ({ addTodo, setMessage }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTodo(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('please enter a valid title');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Enter the todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-text"
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
