import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Việc 1" },
    { id: 2, title: "Việc 2" },
    { id: 3, title: "Việc 3" },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="todo-list">
      <TodoForm addToDo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
