import React from "react";

const TodoItem = (props) => {
  return (
    <>
      <div className="addItem">
        <li>{props.listAdd}</li>
        <i
          className="fa-sharp fa-solid fa-trash"
          onClick={() => {
            props.deletinitems(props.id);
          }}
        ></i>
      </div>
    </>
  );
};

export default TodoItem;
