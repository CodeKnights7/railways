import React from "react";
import style from "../header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
    const [status, setStatus] = useState(false);
  return (
    <>

      <span className={style["primary-color"]}>
        <div className={style["top"]}>
          <img
            className={style["img"]}
            src="https://w7.pngwing.com/pngs/724/405/png-transparent-logo-train-train-text-logo-mode-of-transport-thumbnail.png"
          />
          <p>Reservation</p>
        </div>
        <div className={style["top1"]}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Reservation</a>
            </li>
            {/* <li><a href="Login">Login</a></li> */}
            <Link to="/login">Login</Link>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
          <button onClick={() => setStatus(!status)}>Click me</button>
        </div>
      </span>
    </>
  );
}
