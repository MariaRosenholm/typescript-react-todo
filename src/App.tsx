import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import AddTodo from "./components/AddTodo";
import { Todo } from "./todo.models";
import UpdateTodo from "./components/UpdateTodo";

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Cooking" },
    { id: 2, text: "Studying" },
    { id: 3, text: "Dancing" },
  ]);
  const [updatedTodo, setUpdatedTodo] = useState<Todo>({ id: 0, text: "" });
  const [showUpdate, setShowUpdate] = useState<boolean>(false);

  const todoAddHandler = (t: string) => {
    setTodos([...todos, { id: Math.random(), text: t }]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const updateTodo = (todo: Todo) => {
    setShowUpdate(true);
    setUpdatedTodo(todo);
  };

  const updateList = (todo: Todo) => {
    let index = 0;
    for (let t of todos) {
      if (t.id === todo.id)
        index = todos.findIndex((tDo) => tDo.id === todo.id);
      const newArray = todos;
      newArray.splice(index, 1, todo);
      setTodos([...newArray]);
      setShowUpdate(false);
    }
  };

  return (
    <div className="App">
      <h1>To do app</h1>
      {showUpdate && <UpdateTodo updateList={updateList} todo={updatedTodo} />}
      {!showUpdate && <AddTodo addToApp={todoAddHandler} />}
      <ToDoList updateTodo={updateTodo} deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
};

export default App;
