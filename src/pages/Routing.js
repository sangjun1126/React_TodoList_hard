import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Product from "./Product";
import NotFound from "./NotFound";
import App from "../App";
import Clock from "../sople/Clock";
import CommentList from "../sople/CommentList";
import NotificationList from "../sople/NotificationList";
import Accommodate from "../sople/Accommodate";
import SFC_ConfirmButton from "../sople/SFC_ConfirmButton";
import LandingPage from "../sople/LandingPage";
import AttendanceBook from "../sople/AttendanceBook";
import Signup from "../sople/Signup";
import Calculator from "../sople/Calculator";

const Routing = () => {
  return (
    <div className="Routing">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/*" element={<Product />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/todo_list" element={<App />}></Route>
          <Route path="/clock" element={<Clock />}></Route>
          <Route path="/CommentList" element={<CommentList />}></Route>
          <Route path="/notify" element={<NotificationList />}></Route>
          <Route path="/hooks" element={<Accommodate />}></Route>
          <Route path="/Confirm" element={<SFC_ConfirmButton />}></Route>
          <Route path="/LandingPage" element={<LandingPage />}></Route>
          <Route path="/Attendance" element={<AttendanceBook />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/calculate" element={<Calculator />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
