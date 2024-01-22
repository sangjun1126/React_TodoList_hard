import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = (props) => {
  return (
    <div>
      <h3>프로젝트 포트폴리오</h3>
      <ul>
        <Link to="/todo_list">
          <li>
            <button className="button">TodoList 보러가기!</button>
          </li>
        </Link>
        <Link to="/product/2">
          <li>2번 페이지</li>
        </Link>
      </ul>
    </div>
  );
};

export default Main;
