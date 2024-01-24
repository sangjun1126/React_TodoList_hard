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
        <Link to="/hooks">
          <li>
            <button className="button">hooks 미니 프로젝트</button>
          </li>
        </Link>
        <Link to="/confirm">
          <li>
            <button className="button">확인 버튼 만들기 (컴포넌트 비교)</button>
          </li>
        </Link>

        <Link to="/LandingPage">
          <li>
            <button className="button">미니 로그인 구현</button>
          </li>
        </Link>

        <Link to="/Attendance">
          <li>
            <button className="button">미니 출석부 구현하기</button>
          </li>
        </Link>

        <Link to="/signup">
          <li>
            <button className="button">회원가입 구현하기</button>
          </li>
        </Link>

        <Link to="/calculate">
          <li>
            <button className="button">섭씨 화씨 구현하기</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Main;
