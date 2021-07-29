import React, { useState, useRef } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import EditTodo from './components/EditTodo';
import todoList from './data/todoList';

function TodoList() {
  const [todos, setTodos] = useState(todoList);
  const [name, setName] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [editId, setEditId] = useState("")

  const _inputElement = useRef();

  function handleChange(e) {
    setName(e.target.value);    
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") return;
    setTodos([...todos, { id: Date.now(), name } ]);
    setName("");
    _inputElement.current.value = "";
    handleCreate();
  }

  function handleClear() {
    setTodos([]);
  }

  function handleUpdate(attrs) {
    const newTodo = todos.map(todo => {
      if (todo.id === editId) {
        return {
          ...todo,
           name: name || attrs.name 
        };
      }
      return todo;
    });
   if (name === "") return;
    setTodos(newTodo);
    handleEditClick();
  }
  
  function deleteTodo(id) {
    setTodos(todos =>
      todos.filter(todo => todo.id !== id
    ));
  }

  function handleCreate() {
    setIsCreate(!isCreate);
  }

  function handleEditClick() {
    setIsModify(!isModify);
  }

  const editTodo = id => {
    setEditId(id);
    handleEditClick();
  }

  if (isModify) {
    const todo = todos.find(todo => todo.id === editId);
    return (
      <EditTodo {...todos} handleSubmit={handleUpdate} closeForm={handleEditClick} handleChange={handleChange} />
    );
  }
 
  return (
    <div className="todoList">
      {todos.map(todo => {
        return <Todo
          key={todo.id}
          {...todo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        return todo;
      })}
      {isCreate ? (
        <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} _inputElement={_inputElement} closeForm={handleCreate} />
      ) : ( 
        <div className="listBtn">
          <button onClick={handleCreate}>+</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      )}
    </div>
  );
}

export default TodoList