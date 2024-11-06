import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, setTodos }) {
  return (
    <div className="todos">
      {todos &&
        todos.map((todo) => 
          <Todo 
            todos={todos} 
            setTodos={setTodos} 
            key={todo.id} 
            todo={todo}
          />
        )}
    </div>
  );
}
