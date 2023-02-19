import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // State
  const [todos, setTodos] = useState([
    { id: 1, title: "Việc 1" },
    { id: 2, title: "Việc 2" },
    { id: 3, title: "Việc 3" },
  ]);

  // Function to add todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Function to delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // Context data
  const todoContextData = {
    todos,
    addTodo,
    deleteTodo,
  };

  // Return provider
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
