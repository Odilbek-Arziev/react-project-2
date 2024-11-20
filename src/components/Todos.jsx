import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, setTodos, setEditTodo, todosArray }) {

  function filterTodos(e) {
    switch (e.target.textContent) {
      case 'Завершенные':
        todosArray = todosArray.filter((todo) => todo.completed)
        break
      case 'Открытые':
        todosArray = todosArray.filter((todo) => !todo.completed)
        break
    }
    setTodos(todosArray)
  }

  return (
    <div className="todos-container">
      {
        (todos.length) ? (
          <div className="filter-buttons">
            <button onClick={(e) => filterTodos(e)}>Все</button>
            <button onClick={(e) => filterTodos(e)}>Завершенные</button>
            <button onClick={(e) => filterTodos(e)}>Открытые</button>
          </div>
        ) : null
      }
      <div className="todos">
        {todos &&
          todos.map((todo) =>
            <Todo
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              todo={todo}
              setEditTodo={setEditTodo}
            />
          )}
      </div>
    </div>
  );
}
