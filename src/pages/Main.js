import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = (props) => {
  return (
    <div>
      <h3>리액트 연습하기</h3>
      <ul>
        <Link to="/todo_list">
          <li>
            <button className="button">TodoList 보러가기!</button>
          </li>
        </Link>
        <Link to="/clock">
          <li>
            <button className="button">시계 보러가기</button>
          </li>
        </Link>
        <Link to="/CommentList">
          <li>
            <button className="button">댓글 창 보러가기</button>
          </li>
        </Link>
        <Link to="/notify">
          <li>
            <button className="button">알림 창 보러가기(state)</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Main;
