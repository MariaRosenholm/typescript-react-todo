import React, { useRef } from "react";
import "./AddTodo.css";

type addToAppProp = {
  addToApp: (todoText: string) => void; // here the todoText can be named basically anything, there is two ways of doing the declerations, using type of interface, interface example is in ToDoList component
};

const AddTodo: React.FunctionComponent<addToAppProp> = ({ addToApp }) => {
  const textInputRef = useRef<HTMLInputElement>(null); // in hooks there received data needs to be decalred, this time HTMLInputElement

  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInputRef.current!.value.trim().length > 0) {
      addToApp(textInputRef.current!.value);
    } else {
      alert("Add text");
    }
    //! mark is needed to convince the typescript that there will be some data
    textInputRef.current!.value = "";
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        <div className="form-control">
          <label>
            Add todo
            <input type="text" id="addTodo" ref={textInputRef} />
          </label>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
