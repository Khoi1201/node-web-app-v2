import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  // Load context theme
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;

  // Load context todos
  const { deleteTodo } = useContext(TodoContext);

  // Style
  const style = isLightTheme ? light : dark;

  // For this component only
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li style={style} onClick={handleDelete}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
