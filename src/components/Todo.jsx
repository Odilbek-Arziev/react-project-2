import React from "react";


export default function Todo({ todos, setTodos, todo }) {
  function completeTodo(todo) {
    let newTodos = todos.map((task) => {
      if (task.id === todo.id) {
        return {...task, completed: !todo.completed}
      }
      return task
    })
    setTodos(newTodos)    
  }

  return (
    <div className="todo">
      <div className={(todo.completed) ? 'completed' : ''}>
        <input
          type="checkbox"
          checked={todo.completed}
          className="checkbox"
          onChange={() => completeTodo(todo)}
        />
        <label htmlFor={`check-${todo.id}`}>{todo.title}</label>
      </div>
    </div>
  );
}

