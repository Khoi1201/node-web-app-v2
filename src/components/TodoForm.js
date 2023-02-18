import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addToDo }) => {
  const [title, setTitle] = useState("");

  // style
  const style = {
    background: "rgb(240,240,240)",
    color: "black",
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo({
      id: uuidv4(),
      title,
    });
    setTitle("")
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
