import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  // Load context theme
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;

  // Load context todos
  const {addTodo} = useContext(TodoContext)

  // Style
  const style = isLightTheme ? light : dark;

  // For this component only
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter a new todo"
        value={title}
        onChange={onTitleChange}
        required
      />
      <input type="submit" value="add" style={style} />
    </form>
  );
};

export default TodoForm;
