import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Link to="/">
        <h1>Header</h1>
      </Link>
    </div>
  );
}

export default Header;
