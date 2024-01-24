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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
