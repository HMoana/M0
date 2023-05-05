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
              className={classes["modal__content--form"]}
              onSubmit={handleSubmit}
            >
              {/* TITLE */}
              <h1 className={classes["modal__content--title"]}>Login</h1>
              {/* EMAIL */}
              <div className={classes["form__group"]}>
                <input
                  type="email"
                  placeholder="youremail@mail.com"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  className={classes["form__control"]}
                />
              </div>
              {/* PASSWORD */}
              <div className={classes["form__group"]}>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  className={classes["form__control"]}
                />
                {/* LOGIN BUTTON */}
                <button type="submit" name="submit" className={classes["btn"]}>
                  Login
                </button>
              </div>
              {/* BASE */}
              <div className={classes["modal__content--base"]}>
                <a href="#forgot" className={classes["modal__content--link"]}>
                  Forgot password?
                </a>
                <p className={classes["modal__content--text"]}>
                  Don't have an account?{" "}
                  <a
                    href="#register"
                    className={classes["modal__content--link"]}
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginModal;
