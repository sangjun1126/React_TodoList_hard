import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const ButtonLink = ({ to, children }) => (
  <Link to={to}>
    <li>
      <button className="button">{children}</button>
    </li>
  </Link>
);

const Main = (props) => {
  return (
    <div>
      <h3>리액트 연습하기</h3>
      <ul>
        <ButtonLink to="/todo_list">TodoList 보러가기!</ButtonLink>
        <ButtonLink to="/clock">시계 보러가기</ButtonLink>
        <ButtonLink to="/CommentList">댓글 창 보러가기</ButtonLink>
        <ButtonLink to="/notify">알림 창 보러가기(state)</ButtonLink>
        <ButtonLink to="/hooks">hooks 미니 프로젝트</ButtonLink>
        <ButtonLink to="/confirm">확인 버튼 만들기 (컴포넌트 비교)</ButtonLink>
        <ButtonLink to="/LandingPage">미니 로그인 구현</ButtonLink>
        <ButtonLink to="/Attendance">미니 출석부 구현하기</ButtonLink>
        <ButtonLink to="/signup">회원가입 구현하기</ButtonLink>
        <ButtonLink to="/calculate">섭씨 화씨 구현하기</ButtonLink>
        <ButtonLink to="/card">카드 컴포넌트 구현하기</ButtonLink>
        <ButtonLink to="/theme">테마 흑백 변경하기</ButtonLink>
        <ButtonLink to="/block">스타일 컴포넌트 만들어보기</ButtonLink>
      </ul>
    </div>
  );
};

export default Main;
