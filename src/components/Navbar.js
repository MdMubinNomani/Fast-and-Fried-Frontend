import React, { useRef } from "react";
import Logo from "../assets/images/fast&friedLogo.png";
import { cart } from "../Data";

const Navbar = () => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home"><strong>HOME</strong></a>
          <a href="#menu"><strong>MENU</strong></a>
          <a href="#products"><strong>PRODUCTS</strong></a>
          <a href="#review"><strong>REVIEW</strong></a>
          <a href="#contact"><strong>CONTACT</strong></a>
        </nav>
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
