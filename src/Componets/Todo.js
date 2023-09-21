import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../store.js/todo/todoActions";

function Todo() {
  const [input, setInput] = useState({ todo: "" });
  const [isEdit, setIsEdit] = useState(false);
  const todos = useSelector((state) => state.todoList);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prevState) => ({ ...prevState, todo: e.target.value }));
  };

  const handleEdit = (item) => {
    setIsEdit(true);
    setInput((prevState) => ({ ...prevState, id: item.id, todo: item.todo }));
  };
  const handleAddandEdit = () => {
    if (input?.id) {
      dispatch(editTodo(input));
      setIsEdit(false);
      setInput({ todo: "" });
      console.log(isEdit, "isEdit");
    } else {
      dispatch(addTodo(input));
      setInput({ todo: "" });
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="add todo"
        value={input.todo}
        onChange={handleChange}
      />
      <button type="button" onClick={() => handleAddandEdit()}>
        {isEdit ? "Edit" : "Add"}
      </button>

      {todos.map((itm) => {
        return (
          <li key={itm.id}>
            {itm.todo}
            <i className="fa-solid fa-edit" onClick={() => handleEdit(itm)} />
            <i
              className="fa-solid fa-trash"
              onClick={() => dispatch(deleteTodo(itm.id))}
            ></i>
          </li>
        );
      })}
    </div>
  );
}

export default Todo;
