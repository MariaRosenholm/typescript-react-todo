import React from "react";
import "./ToDoList.css";

interface TodoListProps {
  todos: { id: number; text: string }[]; // this the way of the declaring the type of the props, it needs to be done here in the component where u are giving the props
  deleteTodo: (id: number) => void;
  updateTodo: (todo: { id: number; text: string }) => void;
}

const ToDoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  deleteTodo,
  updateTodo,
}) => {
  // and here u put the interface after ther react declaration of the function type
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={updateTodo.bind(null, todo)}>Edit</button>
            <button
              onClick={
                deleteTodo.bind(
                  null,
                  todo.id
                ) /* bind needs to be used to here to be able to give the id forward and to be able to run void function */
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
