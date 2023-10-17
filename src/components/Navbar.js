import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from React Router

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // This code will run after the component has mounted and the DOM is ready
    const items = document.querySelectorAll(".item");
    const active = document.querySelector(".active");
    let distanceLeft, distanceTop, elemWidth, elemHeight;

    function reset() {
      active.style.left = `${items[0].offsetLeft}px`;
      active.style.top = `${items[0].offsetTop}px`;
      active.style.width = `${items[0].clientWidth}px`;
      active.style.height = `${items[0].clientHeight}px`;
    }

    items.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        distanceLeft = elem.offsetLeft;
        distanceTop = elem.offsetTop;
        elemWidth = elem.clientWidth;
        elemHeight = elem.clientHeight;

        active.style.width = `${elemWidth}px`;
        active.style.height = `${elemHeight}px`;
        active.style.left = `${distanceLeft}px`;
        active.style.top = `${distanceTop}px`;
      });
    });

    // Call the reset function to initialize the 'active' element
    reset();
  }, []); // The empty dependency array ensures this effect runs once after mount

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav--list">
          <li className="active"></li>
          <li className="item">
            <Link to="/">Home</Link> {/* Link to the homepage */}
          </li>
          <li className="item">
            <Link to="/about">About</Link> {/* Link to the About page */}
          </li>
          <li className="item">
            <Link to="/skills">Skills</Link> {/* Link to other pages */}
          </li>
          <li className="item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
