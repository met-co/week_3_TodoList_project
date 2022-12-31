import React from "react";
import Todo from "./Todo";

const List = ({ todoData, setTodoData }) => {
  const deleteTodoHandler = (id) => {
    const deleteTodoData = todoData.filter((todo) => {
      return todo.id !== id;
    });
    setTodoData(deleteTodoData);
  };
  const onEditHandler = (id) => {
    const EditTodoData = todoData.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodoData(EditTodoData);
  };

  return (
    <div className="list-space">
      <p>Working...🔥</p>
      <div className="list-wrapper">
        {todoData.map((todoData) => {
          if (todoData.isDone === false) {
            return (
              <Todo
                todoData={todoData}
                key={todoData.id}
                handleDelete={deleteTodoHandler}
                handleEdit={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <p>Done! 🎉</p>
      <div className="list-wrapper">
        {todoData.map((todoData) => {
          if (todoData.isDone === true) {
            return (
              <Todo
                todoData={todoData}
                key={todoData.id}
                handleDelete={deleteTodoHandler}
                handleEdit={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default List;
