import React from 'react'

function Todo(props) {
    return (
      <li className={`todo ${props.onTodoItem.completed ? 'completed' : ''}`}>
        {props.isEditing ? (
          <input
            type="text"
            value={props.onEditingText}
            onChange={(e) => props.onSetEditingText(e.target.value)}
          />
        ) : (
          <span onClick={() => props.toggleTodo(props.index)}>{props.onTodoItem.text}</span>
        )}
        <div>
          {props.isEditing ? (
            <button className='setBtn' onClick={() => props.saveEditTodo(props.index)}><span>Save</span></button>
          ) : (
            <>
              <button className='setBtn' onClick={() => props.editTodo(props.index)}> <span>Edit</span></button>
              <button onClick={() => props.deleteTodo(props.index)}>Delete</button>
            </>
          )}
        </div>
      </li>
    );
}

export default Todo