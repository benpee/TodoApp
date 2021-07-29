import React from 'react';

function EditTodo({ id, name, handleSubmit, closeForm, handleChange }) {
  return (
    <div className="editTodo">
      <form>
        <label>Name:</label>
        <input type="text" onChange={handleChange} defaultValue={name} />
        <br />
        <br />
        <button onClick={handleSubmit}>Update</button>
        <button onClick={closeForm}>Cancel</button>
      </form>  
    </div>
  );
}

export default EditTodo