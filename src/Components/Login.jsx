import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import style from "../login.module.css";
import { auth } from "../firebase.config.js";
function Login() {
  const [status, setStatus] = useState(false);
  const clickHandler = () => {
    setStatus(!status);
  };

  return (
    <>
      <span className={style["side"]}>
        <form>
          <h3>Welcome Back!!</h3>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
          <br></br>
          <br></br>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <br></br>
          <button onClick={clickHandler} className={style["button"]}>
            Login
          </button>
        </form>
        <span className={style["side1"]}>
          <img
            src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9naW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="random"
          />
        </span>
      </span>
      <div className={style["down"]}>
        <footer>
          <div className={style["footer"]}>
            <p className={style["a1"]}>About Us</p>
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
              <li>
                <a href="Login">Login</a>
              </li>
              {/* <Link to="/login">Login</Link> */}
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
            <p>© 2023 Reservation. All rights reserved.</p>
            <p>Thank You For Visiting...</p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Login;
