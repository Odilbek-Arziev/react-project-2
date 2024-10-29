import React from "react";

export default function Todo({ todo }) {
  return (
    <div>
      <div>
        <input type="checkbox" />
        <label htmlFor={`check-${todo.id}`}>{todo.title}</label>
      </div>
    </div>
  );
}
