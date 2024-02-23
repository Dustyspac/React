import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import CustomBtn from "./components/CustomBtn";

function App() {
  const [todo, setTodo] = useState([
    {
      id: Date.now(),
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
    },
    {
      id: Date.now() + 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
    },
  ]);

  const [doneTodo, setDoneTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const addTodoHandler = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      contents: contents,
    };
    if (title === "" && contents === "") alert("내용을 추가하세요");
    else setTodo([...todo, newTodo]);
    setContents("");
    setTitle("");
  };

  // 할일삭제기능
  const deleteTodoHandler = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };

  // 완료삭제기능
  const deleteDoneTodoHandler = (id) => {
    setDoneTodo(doneTodo.filter((dt) => dt.id !== id));
  };

  // 할일완료기능
  const doneTodoHandler = (dt) => {
    const newDoneTodo = {
      id: dt.id,
      title: dt.title,
      contents: dt.contents,
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todo.filter((t) => t.id !== dt.id));
  };

  // 완료취소기능
  const doneCancelHandler = (t) => {
    const newTodo = {
      id: t.id,
      title: t.title,
      contents: t.contents,
    };
    setTodo([...todo, newTodo]);
    setDoneTodo(doneTodo.filter((dt) => t.id !== dt.id));
  };

  return (
    <div className="layout">
      <div className="container">
        <p>Todo List📌</p>
        <p>React</p>
        </div>
      <div className="add-form">
        <div className="input-group">
          제목
          <input
            className="add-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          내용
          <input
            className="add-input"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          ></input>
        </div>
        <div className="add-button-1">
          <CustomBtn onClick={addTodoHandler}>추가하기</CustomBtn>
        </div>
      </div>

      <div className="list-wrapper">
        <div className="working-container">
          <h2 className="list-title">Working.. 🔥</h2>
          <div className="todo-container">
              {todo.map((todo) => {
                return (
                  <Todo
                    todo={todo}
                    title={todo.title}
                    key={todo.id}
                    contents={todo.contents}
                    firstHandler={deleteTodoHandler}
                    secondHandler={doneTodoHandler}
                    firstButton="삭제하기"
                    secondButton="완료하기"
                    color="red"
                  />
                );
              })}
          </div>
        </div>
        <div className="working-container">
          <h2 className="list-title">Done..! 🎉</h2>
          <div className="todo-container">
              {doneTodo.map((doneTodo) => {
                return (
                  <Todo
                    todo={doneTodo}
                    title={doneTodo.title}
                    key={doneTodo.id}
                    contents={doneTodo.contents}
                    firstHandler={deleteDoneTodoHandler}
                    secondHandler={doneCancelHandler}
                    firstButton="삭제하기"
                    secondButton="취소하기"
                    color="green"
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
