import React, { useState, useRef } from 'react';
import Todo from './todo/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');
  const todoInputRef = useRef(null);

  const addTodo = () => {
    const newTodo = todoInputRef.current.value.trim();
    if (newTodo) {
      setTodos(prevValue => {
        return [...prevValue, { text: newTodo, completed: false }]
      });
      todoInputRef.current.value = '';
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  };

  const saveEditTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].text = editingText;
    setTodos(newTodos);
    setEditingIndex(null);
    setEditingText('');
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input type="text" ref={todoInputRef} placeholder="Add a new task" autoFocus/>
        <button className='setBtn'  onClick={addTodo}> <span>Add</span></button>
      </div>
      <ul>
        {todos.map((todoItem, index) => (
          <Todo
            key={index}
            index={index}
            onTodoItem={todoItem}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            saveEditTodo={saveEditTodo}
            isEditing={editingIndex === index}
            onEditingText={editingText}
            onSetEditingText={setEditingText}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
