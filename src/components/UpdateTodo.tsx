import React, { useRef } from "react";

type addToAppProp = {
  todo: {
    id: number;
    text: string;
  };
  updateList: (todo: { id: number; text: string }) => void;
};

const UpdateTodo: React.FunctionComponent<addToAppProp> = ({
  todo,
  updateList,
}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const updateHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInputRef.current!.value !== "") {
      updateList({ id: todo.id, text: textInputRef.current!.value });
    } else {
      alert("Add text");
    }
  };

  return (
    <div>
      <form onSubmit={updateHandler}>
        <div className="form-control">
          <label>
            Edit todo
            <input
              type="text"
              id="addTodo"
              ref={textInputRef}
              defaultValue={todo.text}
            />
          </label>
          <button type="submit">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTodo;
