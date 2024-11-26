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

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(posts);

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
