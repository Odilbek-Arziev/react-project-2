import React from "react";

export default function Todo({ todos, setTodos, todo }) {
  return (
    <div>
      <div>
        <input type="checkbox" checked={todo.completed} />
        <label htmlFor={`check-${todo.id}`}>{todo.title}</label>
      </div>
    </div>
  );
}

