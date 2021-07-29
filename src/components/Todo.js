import React from 'react';

function Todo({ onDelete, onEdit, id, name }) {
    return ( 
      <ul className="todo">
        <li key={id} onClick={() => onDelete(id)}>
          {name}
        </li>
        <button onClick={() => onEdit(id)}>Edit</button>
      </ul>
    );
}

export default Todo