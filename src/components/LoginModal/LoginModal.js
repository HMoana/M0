// IMPORTS
import React from "react";
import { useState } from "react";
import { Fragment } from "react";

// PAGES & COMPONENTS
import classes from "./LoginModal.module.scss";

const LoginModal = ({ open, onClose }) => {
  // USE STATE HOOK FOR EMAIL AND PASSWORD
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FUNCTION TO SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    alert("Login successful");
  };

  // CONDITIONAL FOR PROPS OPEN
  if (!open) return null;

  return (
    <Fragment>
      <div className={classes.modal__overlay}>
        <div className={classes.modal__container}>
          <p onClick={onClose} className={classes.modal__closeBtn}>
            X
          </p>
          <div className={classes.modal__content}>
            {/* FORM */}
            <form
              action=""
              className={classes.modal__content__form}
              onSubmit={handleSubmit}
            >
              {/* TITLE */}
              <h1>Login</h1>
              {/* EMAIL */}
              <div className={classes.form__email}>
                <input
                  type="email"
                  placeholder="youremail@mail.com"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              {/* PASSWORD */}
              <div className={classes.form__password}>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {/* LOGIN BUTTON */}
                <button type="submit" name="submit">
                  Login
                </button>
              </div>
              {/* BASE */}
              <a href="#forgot">Forgot password?</a>
              <p>
                Don't have an account? <a href="#register">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginModal;
