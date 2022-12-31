import React from "react";

const Todo = ({ todoData, handleDelete, handleEdit }) => {
  return (
    <div className="todo-container">
      <div>
        <h2>{todoData.title}</h2>
        <div>{todoData.content}</div>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="delete-btn"
          onClick={() => {
            handleDelete(todoData.id);
          }}
        >
          삭제하기
        </button>
        <button
          type="button"
          className="complete-btn"
          onClick={() => {
            handleEdit(todoData.id);
          }}
        >
          {todoData.isDone === false ? "완료" : "취소"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
