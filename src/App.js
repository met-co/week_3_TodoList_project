import React, { useState } from "react";
import Layout from "./components/Layout";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);
  // 최상단 App컴포넌트에서 내려주는 기본 데이터

  return (
    <Layout>
      <Input todoData={todoData} setTodoData={setTodoData} />
      <List todoData={todoData} setTodoData={setTodoData} />
    </Layout>
  );
};
export default App;
