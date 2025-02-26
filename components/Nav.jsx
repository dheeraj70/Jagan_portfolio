import React, { useRef } from "react";
import "./Nav.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Nav = ({ scrolled }) => {
  const router = useRouter();
  const mobnav = useRef(null);
  const burger1 = useRef(null);
  const burger2 = useRef(null);
  const burger3 = useRef(null);

  const burgerPressed = () => {
    mobnav.current.classList.toggle("nav_links_show");
    burger1.current.classList.toggle("burger1");
    burger2.current.classList.toggle("burger2");
    burger3.current.classList.toggle("burger3");
    if (document.body.style.overflow == "") {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "static";
    }
  };

  return (
    <nav
      style={{ backgroundColor: scrolled ? "#F6F4F0" : "rgba(0,0,0,0)" }}
      className="nav"
    >
      <div className="nav_logo">
        <img
        onClick={() => router.push("/")}
          className="nav_logo_img"
          src={scrolled ? "/nav_logo-dark.png" : "/nav_logo-light.png"}
          alt="Dr. Jagan Mohan Varakala"
        />
      </div>
      <div className="nav_links">
        <Link href={"/about"}>About</Link>
        <Link href={"/testimonials"}>Testimonials</Link>
        {/*<Link href={'/about'}>Treatments</Link>*/}
        <Link href={"/gallery"}>Gallery</Link>
        <Link href={"/about"}>Blog</Link>
        <button className="nav_btn">Consult me</button>
      </div>
      <div className="nav_btn_div">
        <button className="nav_burger" onClick={burgerPressed}>
          <div ref={burger1} className="burgerb"></div>
          <div ref={burger2} className="burgerb"></div>
          <div ref={burger3} className="burgerb"></div>
        </button>
      </div>
      <div ref={mobnav} className="mob-nav">
      <Link href={"/"} onClick={burgerPressed}>Home</Link>
      <Link href={"/about"} onClick={burgerPressed}>About</Link>
        <Link href={"/testimonials"} onClick={burgerPressed}>Testimonials</Link>
        <Link href={"/gallery"} onClick={burgerPressed}>Gallery</Link>
        <Link href={"/blog"} onClick={burgerPressed}>Blog</Link>
        <Link href={"/consult"} onClick={burgerPressed}>Consult Now</Link>
        
      </div>
      <button className="mob-nav-bottom">
        Consult Now
      </button>
    </nav>
  );
};

export default Nav;
