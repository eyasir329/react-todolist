import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items,setItems] = useState([]);

  function addItem(inputText){
    setItems(prevItems=>{
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id){
    setItems(prevItems=>{
      return prevItems.filter((item,index)=>{
        return index!==id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
          <h1>To-Do-App</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
          <ul>
            {items.map((toDoItem,index)=>{
              return (
                <ToDoItem
                key = {index}
                id = {index}
                text = {toDoItem}
                onChecked = {deleteItem}
                />
              )
              
            })}
          </ul>
      </div>
    </div>
  );
}

export default App;
