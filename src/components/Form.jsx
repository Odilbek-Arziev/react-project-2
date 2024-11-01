import React, { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [value, setValue] = useState("");

  function addTodo(e) {
    e.preventDefault();

    if (value) {
      let newTodo = {
        id: new Date().getTime(),
        title: value,
        completed: false,
      };

      setValue("");
      setTodos([...todos, newTodo]);
      return;
    }
    alert("Напишите текст задачи");
  }

  return (
    <form className="form" onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Нажмите Enter для добавления задачи"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
