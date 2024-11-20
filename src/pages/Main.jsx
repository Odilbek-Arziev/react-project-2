import React, { useState } from "react";
import Form from "../components/Form";
import Todos from "../components/Todos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { todosArray } from '../utils/todos'

export default function Main() {
  const [todos, setTodos] = useState(todosArray);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="container">
      <div className="box">
        <Header />
        <Form
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <Todos
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          todosArray={todosArray}
        />
        <Footer todos={todos} />
      </div>
    </div>
  );
}
