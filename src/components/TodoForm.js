import React from 'react';

function TodoForm({ handleSubmit, handleChange, _inputElement, closeForm }) {
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input type="text" name="name" ref={_inputElement} onChange={handleChange} />
      <button type="submit">Add</button>
      <button onClick={closeForm}>Cancel</button>
    </form>
  );
}

export default TodoForm