import React, { useState } from "react";
import "../App.css";

const Input = ({ todoData, setTodoData }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: todoData.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    setTodoData([...todoData, newTodo]);
    setTitle("");
    setContent("");
  };
  return (
    <form className="input-form">
      <div className="input-group">
        <label className="form-label" htmlFor="input_title">
          제목
        </label>
        <input
          id="input_title"
          className="input-style"
          value={title}
          // placeholder="이름을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 title의 값으로 업데이트
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="form-label" htmlFor="input_content">
          내용
        </label>
        <input
          id="input_content"
          className="input-style"
          value={content}
          // placeholder="나이를 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 content의 값으로 업데이트
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="button" className="input-button" onClick={addTodoHandler}>
        추가하기
      </button>
    </form>
  );
};

export default Input;
