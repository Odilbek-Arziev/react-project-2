import React, { useState, useEffect } from "react";

export default function Form({ todos, setTodos, editTodo, setEditTodo }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    editTodo ? setValue(editTodo.title) : setValue("");
  }, [editTodo]);

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

  function handleEditTodo(e) {
    e.preventDefault();

    let newTodos = todos.map((todo) => {
      return todo.id === editTodo.id ? { ...editTodo, title: value } : todo;
    });

    setTodos(newTodos);
    setEditTodo(null);
  }

  return (
    <form
      className="form"
      onSubmit={(e) => (editTodo ? handleEditTodo(e) : addTodo(e))}
    >
      <input
        type="text"
        placeholder="Нажмите Enter для добавления задачи"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
