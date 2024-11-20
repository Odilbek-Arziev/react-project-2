import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { trashOutline, createOutline } from "ionicons/icons";

export default function Todo({ todos, setTodos, todo, setEditTodo }) {
  const [hover, setHover] = useState(null)

  function completeTodo(todo) {
    let newTodos = todos.map((task) => {
      if (task.id === todo.id) {
        return { ...task, completed: !todo.completed };
      }
      return task;
    });
    setTodos(newTodos);
  }

  function deleteTodo(todo) {
    let confirmation = window.confirm(
      `Подтвердите удаление задачи №${todo.id}`
    );

    if (confirmation) {
      let newTodos = todos.filter((task) => task.id !== todo.id);
      setTodos(newTodos);
    }
  }

  return (
    <div
      className="todo"
      onMouseEnter={() => setHover(todo.id)}
      onMouseLeave={() => setHover(null)}
    >
      <div className={todo.completed ? "completed" : ""}>
        <input
          type="checkbox"
          checked={todo.completed}
          className="checkbox"
          onChange={() => completeTodo(todo)}
        />
        <label htmlFor={`check-${todo.id}`}>
          {todo.title.length < 30 ? todo.title : todo.title.slice(0, 30) + '...'}
        </label>
      </div>
      {
        hover == todo.id ? (
          <div className="buttons">
            <button className="button delete" onClick={() => deleteTodo(todo)}>
              <IonIcon icon={trashOutline} size="medium" />
            </button>
            <button className="button edit" onClick={() => setEditTodo(todo)}>
              <IonIcon icon={createOutline} size="medium" />
            </button>
          </div>
        ) : null
      }
    </div>
  );
}
