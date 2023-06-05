import { useState } from 'react';
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default InputTodo;
