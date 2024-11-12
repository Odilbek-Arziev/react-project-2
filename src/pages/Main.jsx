import React, { useState } from "react";
import Form from "../components/Form";
import Todos from "../components/Todos";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Main() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo #1", completed: true },
    { id: 2, title: "Todo #2", completed: false },
    { id: 3, title: "Todo #3", completed: true },
    { id: 4, title: "Todo #4", completed: false },
    { id: 5, title: "Todo #5", completed: true },
  ]);
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
        <Todos todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        <Footer todos={todos} />
      </div>
    </div>
  );
}
