import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  const style = {
    background: "rgb(240,240,240)",
    color: "black",
  };
  const handleDelete = () =>{
    deleteTodo(todo.id)
  }

  return <li style={style} onClick={handleDelete}>{todo.title}</li>;
};

export default TodoItem;
