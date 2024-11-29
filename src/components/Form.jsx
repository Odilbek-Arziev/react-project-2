import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Form({
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  onChange,
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    editTodo ? setValue(editTodo.title) : setValue("");
  }, [editTodo]);

  async function addTodo(e) {
    e.preventDefault();

    if (value) {
      let newTodo = { title: value };

      await axios
        .post("http://localhost:8000/todo", newTodo)
        .then(() => setValue(""))
        .catch((error) => console.error(error));

      onChange();
      return;
    }
    alert("Напишите текст задачи");
  }

  async function handleEditTodo(e) {
    e.preventDefault();

    await axios
      .put("http://localhost:8000/todo/" + editTodo.id, {
        title: value,
        completed: editTodo.completed,
      })
      .then(() => onChange())
      .catch((error) => console.error(error));

    setEditTodo(null);
  }

  function selectHandler(e) {
    switch (e.target.value) {
      case "deleteAll":
        setTodos([]);
        break;
      case "completeAll":
        todos = todos.map((todo) => ({ ...todo, completed: true }));
        setTodos(todos);
    }
  }
  return (
    <div className="form-container">
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
      <select name="" id="" onChange={(e) => selectHandler(e)}>
        <option value="">----</option>
        {todos.length ? <option value="deleteAll">Удалить все</option> : null}
        {todos.length && todos.find((todo) => !todo.completed) ? (
          <option value="completeAll">Завершить все</option>
        ) : null}
      </select>
    </div>
  );
}
