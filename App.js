import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import TodoItem from "./TodoItem";

const App = () => {
  const [list, setList] = useState("");
  const [item, setItem] = useState([]);

  const addItem = (e) => {
    setList(e.target.value);
  };
  const newItem = () => {
    setItem((itemAdded) => {
      return [...itemAdded, list];
    });
    setList("");
  };

   const deleteList =(id)=> {
     setItem((oldvalues) => {
       return oldvalues.filter((arrElem, index) => {
         return index !== id;
       });
     });
   }
  
  return (
    <div className="container">
      <div className="todoList">
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="Enter new items"
          onChange={addItem}
          value={list}
        />
        <button onClick={newItem}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <ol>
          {item.map((value, index) => {
            return (
              <>
                <TodoItem
                  key={index}
                  id={index}
                  listAdd={value}
                  deletinitems={deleteList}
                />
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default App;
