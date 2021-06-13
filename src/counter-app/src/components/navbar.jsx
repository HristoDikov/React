import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a
        className="navbar-brand"
        href="https://www.youtube.com/watch?v=Ke90Tje7VS0&t=579s"
      >
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
