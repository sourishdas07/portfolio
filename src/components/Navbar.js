import React, { useEffect, useState } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <nav className="hidden md:block bg-transparent px-3 py-2 fixed w-full top-left-0 z-50 rounded-3xl blur-effect">
      <div className="container mx-auto justify-between flex flex-wrap items-center">
        <div className="hidden md:block">
          <h1>Hello</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
