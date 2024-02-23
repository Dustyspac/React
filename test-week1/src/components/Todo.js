import React from "react";
import "../App.js";
import CustomBtn from './CustomBtn.js';

function Todo(props) {
  const { title, contents, todo, firstButton, secondButton, color } = props;
  //두번째 버튼이 취소하기면 버튼 색상 변경하기
  if (secondButton === "취소하기")
    return (
      <div style={{ borderColor: color }} className="todo-contents">
        <p className = "title">{title}</p>
        <p className = "content">{contents}</p>
        <p>
          <CustomBtn
            buttonColor="red"
            onClick={() => props.firstHandler(todo.id)}
          >
            {firstButton}
          </CustomBtn>
          <CustomBtn
            buttonColor="grey"
            onClick={() => props.secondHandler(todo)}
          >
            {secondButton}
          </CustomBtn>
        </p>
      </div>
    );
  return (
    <div style={{ borderColor: color }} className="todo-contents">
      <p className = "title">{title}</p>
      <p className = "content">{contents}</p>
      <p>
        <CustomBtn
          buttonColor="red"
          onClick={() => props.firstHandler(todo.id)}
        >
          {firstButton}
        </CustomBtn>
        <CustomBtn
          buttonColor="green"
          onClick={() => props.secondHandler(todo)}
        >
          {secondButton}
        </CustomBtn>
      </p>
    </div>
  );
}

export default Todo;
