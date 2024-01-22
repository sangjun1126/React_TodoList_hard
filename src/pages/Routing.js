import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Product from "./Product";
import NotFound from "./NotFound";
import App from "../App";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
