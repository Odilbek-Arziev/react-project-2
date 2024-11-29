import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Todos from "../components/Todos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { todosArray } from "../utils/todos";
import axios from "axios";

export default function Main() {
  const [todos, setTodos] = useState(todosArray);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => load(), []);

  function load() {
    axios
      .get("http://localhost:8000/todo")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <div className="box">
        <Header />
        <Form
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          onChange={load}
        />
        <Todos
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          todosArray={todosArray}
          onChange={load}
        />
        <Footer todos={todos} />
      </div>
    </div>
  );
}
