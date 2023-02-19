import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todos = () => {
  // Load context todos
  const { todos } = useContext(TodoContext);

  // Load context auth
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="todo-list">
      {isAuthenticated ? (
        <div>
          <TodoForm />
          <ul>
            {todos.map((todo, index) => (
              <TodoItem todo={todo} key={index} />
            ))}
          </ul>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Not authorised</p>
      )}
    </div>
  );
};

export default Todos;
