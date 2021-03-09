import React, { useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const handleNavScrolls = () => {
    var sections = document.querySelectorAll(
      ".about, .products, .services, .contact"
    );
    var navButtons = document.querySelectorAll(".nav-link");
    navButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        for (let i = 0; i < navButtons.length; i++) {
          if (navButtons[i] === e.target) {
            setTimeout(function () {
              let nextPos = sections[i].offsetTop - 50;
              scroll({
                top: nextPos,
                behavior: "smooth",
              });
            }, 400);
          }
        }
      });
    });
    //on click of nav buttons go to these sections
  };

  useEffect(() => {
    handleNavScrolls();
  });

  return (
    <nav className="font-sans text-base z-10 hidden sm:fixed sm:block w-screen">
      <div className="flex justify-center px-4 h-12 bg-gray-900 items-center font-bold text-blue-100">
        <ul className="flex">
          <li className="mr-4 hover:text-blue-500 ease-in duration-300">
            <a className="nav-link cursor-pointer">Services</a>
          </li>
          <li className="mr-4 hover:text-blue-500 ease-in duration-300">
            <a className="nav-link cursor-pointer">Products</a>
          </li>
          <li className="mr-4 hover:text-blue-500 ease-in duration-300">
            <a className="nav-link cursor-pointer">About</a>
          </li>
          <li className="mr-16 hover:text-blue-500 ease-in duration-300">
            <a className="nav-link cursor-pointer">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
